package inviggoads.adsapp.model;

public enum Categories {
    CLOTHING(1), TOOLS(2), SPORTS(3), ACCESSORIES(4), FURNITURE(5), PETS(6), GAMES(7), BOOKS(8), TECHNOLOGY(9);

    private int categoryId;

    Categories(int id) {
        this.categoryId = id;
    }

    public int getCategoryId() {
        return categoryId;
    }

    public static Categories parse (int id) {
        for (Categories cat : Categories.values()) {
            if (cat.categoryId == id) {
                return cat;
            }
        }
        return null;
    }


}
