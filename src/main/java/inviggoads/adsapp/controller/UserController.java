package inviggoads.adsapp.controller;

import inviggoads.adsapp.dto.AppUserDTO;
import inviggoads.adsapp.model.AppUser;
import inviggoads.adsapp.service.UserService;
import org.springframework.beans.BeanUtils;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.MediaType;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

@RestController
@RequestMapping("/user")
@CrossOrigin
public class UserController {

    @Autowired
    UserService userService;



    @PostMapping(value = "/signup", produces = MediaType.APPLICATION_JSON_VALUE)
    public ResponseEntity<AppUserDTO> saveUser(@RequestBody AppUserDTO user) {

        AppUser appUser = new AppUser();
        BeanUtils.copyProperties(user, appUser);
        AppUserDTO returnedValue = new AppUserDTO();
        BeanUtils.copyProperties(userService.saveUser(appUser), returnedValue);
        return new ResponseEntity<>(returnedValue, HttpStatus.OK);
    }
}
