package inviggoads.adsapp.config;

import inviggoads.adsapp.model.Ad;
import inviggoads.adsapp.model.AppUser;
import inviggoads.adsapp.repository.AdRepository;
import inviggoads.adsapp.repository.UserRepository;
import org.springframework.beans.factory.annotation.Configurable;
import org.springframework.boot.CommandLineRunner;
import org.springframework.context.annotation.Bean;
import org.springframework.context.annotation.Configuration;

import java.util.*;
import java.util.stream.Collectors;

@Configuration
public class DataBaseInit {

    //import.sql throws an exception, this class is use for init database with  data...

    public List<AppUser> getUsers(UserRepository userRepository) {
       return List.of("pera", "mika", "zika", "aki", "admin").stream()
                .map(userName -> userRepository.save(new AppUser(userName, "password", new Date(), "04345345")))
                .collect(Collectors.toList());
    }

    public List<Ad> getAds(UserRepository userRepository, AdRepository adRepository) {
        List<AppUser> users = getUsers(userRepository);
        List<String> pics = List.of("https://aumento.officemate.co.th/media/catalog/product/O/F/OFM5004948.jpg?imwidth=640",
                "https://www.chicagotribune.com/resizer/oCAINQVqraQinbymMrR5UHDQjMc=/1200x0/top/arc-anglerfish-arc2-prod-tronc.s3.amazonaws.com/public/YO4VIEHCNJHQDCZRPURF2WJP64.jpg",
                "https://clickmyemails.com/wp-content/uploads/2018/09/Create-the-purchase-of-your-product.jpg",
                "https://marketingweek.imgix.net/content/uploads/2017/09/06163244/price-tags_750.jpg?auto=compress,format&q=60&w=750&h=460",
                "https://lallahoriye.com/wp-content/uploads/2019/04/Product_Lg_Type.jpg");
        List<Integer> cats = List.of(3, 5, 6, 7, 3);
        List<String> cities = List.of("Beograd", "Kragujevac", "Novi Sad", "Zrenjanin", "Negotin");

        List<Ad> res = new ArrayList(5);
        for (int i = 0; i<5; i++) {
            res.add(adRepository.save(new Ad("NameAdNo"+i,
                    "This is some content of properties of product"+i,
                    pics.get(i),
                    5,
                    cats.get(i),
                    users.get(i),
                    cities.get(i),
                    new Date())));
        }
        return res;
    }

    @Bean
    public CommandLineRunner loadData(UserRepository userRepository, AdRepository adRepository) {
        return (args) -> {
            getAds(userRepository, adRepository);
        };
    }
}
