package com.app.api.user;
import java.util.List;
import com.app.model.*;
import com.google.common.base.Strings;

import org.springframework.stereotype.Service;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.security.core.userdetails.UsernameNotFoundException;
import org.springframework.context.annotation.Bean;
import org.springframework.security.core.Authentication;
import org.springframework.security.core.context.SecurityContextHolder;

import com.app.repo.UserRepo;
import com.app.model.user.*;

@Service
public class UserService {

  @Autowired
  private UserRepo userRepo;

	public String getLoggedInUserId(){
		Authentication auth = SecurityContextHolder.getContext().getAuthentication();
        if (auth==null){
            return "nosession";
        }
		return auth.getName();
	}


	public Users getLoggedInUser() {
		String loggedInUserId = this.getLoggedInUserId();
		Users users = this.getUserInfoByUserId(loggedInUserId);
		return users;
	}

	public Users getUserInfoByUserId(String userId){
			Users users = this.userRepo.findOneByUserId(userId).orElseGet( () -> new Users());
			return users;
	}

	public boolean insertOrSaveUser(Users users) {
		this.userRepo.save(users);
		return true;
	}

	public boolean addNewUser(Users users) {
		Users newUser = this.getUserInfoByUserId(users.getUserId());
		if (newUser.getUserId().equals("new")){
			// This means the username is not found therfore its is returning a default value of "new"
			return this.insertOrSaveUser(users);
		}
		else{
			return false;
		}
	}

}
