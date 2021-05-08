package inviggoads.adsapp.repository;

import inviggoads.adsapp.model.AppUser;
import org.springframework.data.jpa.repository.JpaRepository;

public interface UserRepository extends JpaRepository<AppUser, Integer> {
    AppUser findByUserName(String userName);
}
