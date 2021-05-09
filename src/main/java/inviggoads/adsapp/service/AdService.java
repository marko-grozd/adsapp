package inviggoads.adsapp.service;

import inviggoads.adsapp.dto.AdRequest;
import inviggoads.adsapp.model.Ad;
import inviggoads.adsapp.model.AppUser;
import inviggoads.adsapp.repository.AdRepository;
import inviggoads.adsapp.repository.UserRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.Date;

@Service
public class AdService {

    @Autowired
    AdRepository ar;
    @Autowired
    UserRepository ur;


    public Ad save(AdRequest request) {
        Ad adToSave = new Ad();
        AppUser user = ur.findByUserName(request.getUserName());
        adToSave.setName(request.getName());
        adToSave.setCity(request.getCity());
        adToSave.setCategory(Integer.parseInt(request.getCategoryId()));
        adToSave.setUser(user);
        adToSave.setDetails(request.getDetails());
        adToSave.setImageUrl(request.getImageUrl());
        adToSave.setDate(new Date());
        return ar.save(adToSave);

    }
}
