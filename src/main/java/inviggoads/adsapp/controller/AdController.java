package inviggoads.adsapp.controller;

import inviggoads.adsapp.dto.AdRequest;
import inviggoads.adsapp.dto.AdResponse;
import inviggoads.adsapp.model.Ad;
import inviggoads.adsapp.service.AdService;
import org.springframework.beans.BeanUtils;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

@RestController
@RequestMapping("/ad")
@CrossOrigin
public class AdController {

    @Autowired
    AdService ads;

    @PostMapping
    public ResponseEntity<AdResponse> saveAd(@RequestBody AdRequest adRequest) {
        Ad ad = ads.save(adRequest);
        AdResponse adResponse = new AdResponse();
        BeanUtils.copyProperties(ad, adResponse);
        return new ResponseEntity<AdResponse>(adResponse, HttpStatus.OK);
    }
}
