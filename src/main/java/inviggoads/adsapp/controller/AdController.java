package inviggoads.adsapp.controller;

import inviggoads.adsapp.dto.AdRequest;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

@RestController
@CrossOrigin
@RequestMapping("/ad")
public class AdController {

    @PostMapping
    public ResponseEntity<AdRequest> saveAd(@RequestBody AdRequest adRequest) {
        return new ResponseEntity<>();
    }
}
