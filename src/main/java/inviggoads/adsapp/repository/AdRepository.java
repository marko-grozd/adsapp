package inviggoads.adsapp.repository;

import inviggoads.adsapp.model.Ad;
import inviggoads.adsapp.model.AppUser;
import org.springframework.data.jpa.repository.JpaRepository;

import java.util.List;

public interface AdRepository extends JpaRepository<Ad, Integer> {

    List<Ad> findAllByUser(AppUser user);

}
