package com.app.identity;

import org.springframework.security.core.authority.AuthorityUtils;
import com.app.model.user.Role;
import com.app.model.user.Users;

public class TokenUser extends org.springframework.security.core.userdetails.User {
    private Users users;

    //For returning a normal user
    public TokenUser(Users users) {
        super( users.getUserId(), users.getPassword(), AuthorityUtils.createAuthorityList(users.getRole().toString()  )  );
        //super(user.getUserName(), user.getPassword(), true, true, true, true,  AuthorityUtils.createAuthorityList(user.getRole().toString()));
        this.users = users;
    }

    public Users getUser() {
        return users;
    }

    public String getRole() {
        return users.getRole().toString();
    }
}
