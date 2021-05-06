package inviggoads.adsapp.repository;

import inviggoads.adsapp.model.Ad;
import org.springframework.data.jpa.repository.JpaRepository;

public interface AdRepository extends JpaRepository<Ad, Integer> {

}
