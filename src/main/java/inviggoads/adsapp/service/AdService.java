package inviggoads.adsapp.service;

import inviggoads.adsapp.dto.AdRequest;
import inviggoads.adsapp.model.Ad;
import inviggoads.adsapp.model.AppUser;
import inviggoads.adsapp.repository.AdRepository;
import inviggoads.adsapp.repository.UserRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.PageRequest;
import org.springframework.data.domain.Pageable;
import org.springframework.stereotype.Service;

import java.util.Date;
import java.util.List;

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

    public Page<Ad> getAllPageable(int page) {
        Pageable pageable = PageRequest.of(page, 3);
        return  ar.findAll(pageable);
    }

    public Ad getById(int id) {
        return ar.findById(id).get();
    }
}
