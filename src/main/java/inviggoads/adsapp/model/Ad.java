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


}
