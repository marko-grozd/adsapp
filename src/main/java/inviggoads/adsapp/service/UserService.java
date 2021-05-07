package inviggoads.adsapp.service;

import inviggoads.adsapp.model.AppUser;
import inviggoads.adsapp.repository.UserRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.security.crypto.bcrypt.BCryptPasswordEncoder;
import org.springframework.stereotype.Service;

import java.util.List;
import java.util.Optional;

@Service
public class UserService {

    @Autowired
    private UserRepository userRepository;


    public List<AppUser> getAll() {
        return userRepository.findAll();
    }

    public Optional<AppUser> getById(Integer id) {
        return userRepository.findById(id);
    }

    public AppUser saveUser(AppUser user) {
       return userRepository.save(user);
    }
}
