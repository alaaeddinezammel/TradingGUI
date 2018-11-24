package com.app.identity;

import org.springframework.security.core.Authentication;
import org.springframework.stereotype.Service;
import io.jsonwebtoken.*;
import javax.servlet.http.*;
import java.util.*;
import java.io.IOException;

import com.app.model.user.Role;
import com.app.model.user.Users;

@Service
public class TokenUtil {

    //private static final long VALIDITY_TIME_MS = 10 * 24 * 60 * 60 * 1000;// 10 days Validity
    private static final long VALIDITY_TIME_MS =  2 * 60 * 60 * 1000; // 2 hours  validity
    private static final String AUTH_HEADER_NAME = "Authorization";

    private String secret="mrin";

    public Optional<Authentication> verifyToken(HttpServletRequest request) {
      final String token = request.getHeader(AUTH_HEADER_NAME);

      if (token != null && !token.isEmpty()){
        final TokenUser user = parseUserFromToken(token.replace("Bearer","").trim());
        if (user != null) {
            return  Optional.of(new UserAuthentication(user));
        }
      }
      return Optional.empty();

    }

    //Get User Info from the Token
    public TokenUser parseUserFromToken(String token){

        Claims claims = Jwts.parser()
            .setSigningKey(secret)
            .parseClaimsJws(token)
            .getBody();

        Users users = new Users();
        users.setUserId( (String)claims.get("userId"));
        users.setRole(Role.valueOf((String)claims.get("role")));
        if (users.getUserId() != null && users.getRole() != null) {
            return new TokenUser(users);
        } else {
            return null;
        }
    }

    public String createTokenForUser(TokenUser tokenUser) {
      return createTokenForUser(tokenUser.getUser());
    }

    public String createTokenForUser(Users users) {
      return Jwts.builder()
        .setExpiration(new Date(System.currentTimeMillis() + VALIDITY_TIME_MS))
        .setSubject(users.getFullName())
        .claim("userId", users.getUserId())
        .claim("role", users.getRole().toString())
        .signWith(SignatureAlgorithm.HS256, secret)
        .compact();
    }

}
