package com.app.repo;

import org.springframework.data.jpa.repository.JpaRepository;
import com.app.model.user.Users;
import java.util.Optional;

public interface UserRepo extends JpaRepository<Users, Long> {
    Optional<Users> findOneByUserId(String userId);
    Optional<Users> findOneByUserIdAndPassword(String userId, String password);
}

