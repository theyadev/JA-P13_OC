package com.openclassrooms.p13_oc.service;

import com.openclassrooms.p13_oc.models.User;
import com.openclassrooms.p13_oc.repository.UserRepository;
import org.springframework.stereotype.Service;


@Service
public class UserService {
    private final UserRepository userRepository;

    public UserService(UserRepository userRepository) {
        this.userRepository = userRepository;
    }

    public User findById(Long id) {
        return this.userRepository.findById(id).orElse(null);
    }

    public User create(User user) {
        return this.userRepository.save(user);
    }

    public void delete(Long id) {
        this.userRepository.deleteById(id);
    }
    
    public User findByUsername(String username) {
        return this.userRepository.findByUsername(username).orElse(null);
    }

}
