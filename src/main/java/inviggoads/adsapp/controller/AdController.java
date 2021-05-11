package inviggoads.adsapp.controller;

import inviggoads.adsapp.dto.AdRequest;
import inviggoads.adsapp.dto.AdResponse;
import inviggoads.adsapp.dto.AdWithUserDetails;
import inviggoads.adsapp.model.Ad;
import inviggoads.adsapp.model.Categories;
import inviggoads.adsapp.service.AdService;
import org.springframework.beans.BeanUtils;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.ArrayList;
import java.util.List;
import java.util.stream.Collectors;

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

    @GetMapping("/all/{page}")
    public ResponseEntity<List<AdResponse>> allAlds(@PathVariable Integer page) {
        List<AdResponse> res = ads.getAllPageable(page).stream().map(ad -> {
            AdResponse adResponse = new AdResponse();
            adResponse.setCategory(Categories.parse(ad.getCategory()).toString());
            BeanUtils.copyProperties(ad, adResponse);
            return adResponse;
        }).collect(Collectors.toList());
        return new ResponseEntity<>(res, HttpStatus.OK);
    }

    @GetMapping("/all/pagecount")
    public Integer getPageCount() {
        return ads.getAllPageable(0).getTotalPages();
    }

    @GetMapping("/{id}")
    public AdWithUserDetails getById(@PathVariable Integer id) {
        AdWithUserDetails adResponse = new AdWithUserDetails();
        Ad desiredAd = ads.getById(id);
        adResponse.setCategory(Categories.parse(desiredAd.getId()).toString());
        BeanUtils.copyProperties(desiredAd, adResponse);
        BeanUtils.copyProperties(desiredAd.getUser(), adResponse);
        return adResponse;
    }
}
