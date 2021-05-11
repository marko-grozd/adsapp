package inviggoads.adsapp.model;

import javax.persistence.*;
import java.util.Date;

@Entity
public class Ad {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    @Column(name="id", unique = true, nullable = false)
    private Integer id;

    @Column
    private String name;

    @Column
    private String details;

    @Column
    private String imageUrl;

    @Column
    private double grade;

    @Column
    private int category;

    @ManyToOne
    @JoinColumn(name = "userId", referencedColumnName = "id")
    private AppUser user;

    @Column
    private String city;

    @Column
    private Date date;

    public String getName() {
        return name;
    }

    public Integer getId() {
        return id;
    }

    public void setName(String name) {
        this.name = name;
    }

    public String getDetails() {
        return details;
    }

    public void setDetails(String details) {
        this.details = details;
    }

    public String getImageUrl() {
        return imageUrl;
    }

    public void setImageUrl(String imageUrl) {
        this.imageUrl = imageUrl;
    }

    public double getGrade() {
        return grade;
    }

    public void setGrade(double grade) {
        this.grade = grade;
    }

    public int getCategory() {
        return category;
    }

    public void setCategory(int category) {
        this.category = category;
    }

    public AppUser getUser() {
        return user;
    }

    public void setUser(AppUser user) {
        this.user = user;
    }

    public String getCity() {
        return city;
    }

    public void setCity(String city) {
        this.city = city;
    }

    public Date getDate() {
        return date;
    }

    public void setDate(Date date) {
        this.date = date;
    }
    public Ad() {}
    public Ad(String name, String details, String imageUrl, double grade, int category, AppUser user, String city, Date date) {
        this.name = name;
        this.details = details;
        this.imageUrl = imageUrl;
        this.grade = grade;
        this.category = category;
        this.user = user;
        this.city = city;
        this.date = date;
    }
}
