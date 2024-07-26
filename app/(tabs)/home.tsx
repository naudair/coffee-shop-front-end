import {
  Image,
  ImageBackground,
  Pressable,
  StyleSheet,
  Text,
  View,
  ScrollView,
} from "react-native";
import { AntDesign } from "@expo/vector-icons";
import { Ionicons } from "@expo/vector-icons";
import {
  Product,
  useGetCategoriesQuery,
  useGetProductsQuery,
} from "@/generated";
import { useEffect, useState } from "react";

export default function Home() {
  const [products, setProducts] = useState<Product[]>([]);
  const [selectedCategory, setSelectedCategory] = useState<string>("");

  const { data: categoriesData } = useGetCategoriesQuery();
  const categories = categoriesData?.getCategories;

  const { data: productData } = useGetProductsQuery();
  const product = productData?.getProducts;

  useEffect(() => {
    if (productData?.getProducts) {
      setProducts(productData?.getProducts);
    }
  }, [productData]);

  return (
    <View style={styles.container}>
      {/* <Text>home page</Text> */}
      <View
        style={{
          flexDirection: "row",
          justifyContent: "space-between",
          alignItems: "center",
        }}
      >
        <Image
          style={styles.tinyLogo}
          source={{
            uri: "https://media.licdn.com/dms/image/C4D03AQEeEyYzNtDq7g/profile-displayphoto-shrink_400_400/0/1524234561685?e=2147483647&v=beta&t=CJY6IY9Bsqc2kiES7HZmnMo1_uf11zHc9DQ1tyk7R7Y",
          }}
        />
        <View style={{ justifyContent: "center", paddingRight: 30 }}>
          <Text style={{ color: "#fff", fontSize: 23, fontWeight: "900" }}>
            Shahzaib
          </Text>
          <Text style={{ color: "#fff", fontSize: 20, fontWeight: "200" }}>
            Good Morning!
          </Text>
        </View>
        <AntDesign name="search1" size={28} color="#fff" />
        <Ionicons name="notifications-outline" size={28} color="#fff" />
      </View>
      <Image
        style={styles.ads}
        source={require("@/components/images/Ads.png")}
      />

      <View style={{ height: 560 }}>
        <ScrollView
          horizontal={true}
          showsVerticalScrollIndicator={false}
          showsHorizontalScrollIndicator={false}
        >
          <View
            style={{
              flexDirection: "row",
              gap: 20,
              height: 43,
              // backgroundColor: "red",
            }}
          >
            {categories?.map((category, el) => (
              <Text
                key={category._id}
                style={{
                  ...styles.categoryText,
                  color: category._id == selectedCategory ? "#CE9760" : "white",
                }}
              >
                {category.name}
              </Text>
            ))}
          </View>
        </ScrollView>
        <ScrollView
          showsVerticalScrollIndicator={false}
          showsHorizontalScrollIndicator={false}
        >
          <View
            style={{
              width: 355,
              flexDirection: "row",
              flexWrap: "wrap",
              gap: 20,
            }}
          >
            {product?.map((product, el) => (
              <View
                key={el}
                style={{
                  backgroundColor: "#CE9760",
                  height: 166,
                  width: 166,
                  borderRadius: 7,
                  alignItems: "center",
                  padding: 15,
                }}
              >
                <Image
                  source={{ uri: product.imgUrl || "Sorry, There is no image" }}
                  style={{
                    width: 85,
                    height: 70,
                  }}
                />
                <View
                  style={{
                    flexDirection: "row",
                    justifyContent: "space-between",
                    width: "100%",
                    paddingBottom: 7.5,
                  }}
                >
                  <Text
                    style={{
                      fontSize: 18,
                      color: "#fff",
                      fontWeight: "600",
                      // justifyContent: "flex-start",
                    }}
                  >
                    {product.name}
                  </Text>
                  <Text
                    style={{
                      fontSize: 18,
                      color: "#39260B",
                      fontWeight: "600",
                      // alignItems: "flex-end",
                    }}
                  >
                    {product.price?.medium}$
                  </Text>
                </View>
                <Text
                  style={{
                    fontSize: 11,
                    color: "#39260B",
                    alignItems: "flex-start",
                    width: "100%",
                  }}
                >
                  {product.description}
                </Text>
              </View>
            ))}
          </View>
        </ScrollView>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#543A20",
    paddingVertical: 100,
    paddingHorizontal: 30,
    gap: 25,
    // color: "#fff",
  },
  tinyLogo: {
    width: 70,
    height: 70,
    borderRadius: 50,
  },
  ads: {
    // marginVertical: 20,
  },
  categoryText: {
    color: "#fff",
    fontSize: 20,
  },
});

// const category = ["Hot Coffees", "Ice Teas", "Hot Teas", "Drinks", "Cakes"];
