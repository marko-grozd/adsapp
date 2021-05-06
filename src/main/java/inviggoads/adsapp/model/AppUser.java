package inviggoads.adsapp.model;

import org.springframework.security.crypto.bcrypt.BCryptPasswordEncoder;

import javax.persistence.*;
import java.util.Date;
import java.util.List;

@Entity
public class AppUser {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    @Column(name="id", unique = true, nullable = false)
    private Integer id;

    @Column(nullable = false, unique = true)
    private String userName;

    @Column
    private String password;

    @Column
    private Date registrationDate;

    @Column
    private String phoneNumber;

    @OneToMany(mappedBy = "user")
    private List<Ad> ads;


    public AppUser(String userName, String password, Date registrationDate, String phoneNumber) {
        this.userName = userName;
        this.password = password;
        this.registrationDate = registrationDate;
        this.phoneNumber = phoneNumber;
    }

    public AppUser() {
        this.registrationDate = new Date();
    }

    public List<Ad> getAds() {
        return ads;
    }

    public Integer getId() {
        return id;
    }

    public String getUserName() {
        return userName;
    }

    public String getPassword() {
        return password;
    }

    public Date getRegistrationDate() {
        return registrationDate;
    }

    public String getPhoneNumber() {
        return phoneNumber;
    }

    public void setUserName(String userName) {
        this.userName = userName;
    }

    public void setPassword(String password) {
        this.password = new BCryptPasswordEncoder().encode(password);
    }

    public void setRegistrationDate(Date registrationDate) {
        this.registrationDate = registrationDate;
    }

    public void setPhoneNumber(String phoneNumber) {
        this.phoneNumber = phoneNumber;
    }
}
