import { useState, useEffect, useCallback, useRef } from "react";
import { Heart, Flame, X, ChevronDown } from "lucide-react";
import { Button } from "@/components/ui/button";
import { motion, AnimatePresence } from "framer-motion";
import model1Image from "@/assets/model1.jpg";
import model2Image from "@/assets/model2.jpg";
import model3Image from "@/assets/model3.jpg";
import model4Image from "@/assets/model4.jpg";
import model5Image from "@/assets/model5.jpg";
import model6Image from "@/assets/model6.jpg";
import model7Image from "@/assets/model7.jpg";
import model8Image from "@/assets/model8.jpg";
import model9Image from "@/assets/model9.jpg";
import model10Image from "@/assets/model10.jpg";
import model11Image from "@/assets/model11.jpg";
import model12Image from "@/assets/model12.jpg";
import model13Image from "@/assets/model13.jpg";
import model14Image from "@/assets/model14.jpg";
import model15Image from "@/assets/model15.jpg";
import model16Image from "@/assets/model16.jpg";
import model17Image from "@/assets/model17.jpg";
import model18Image from "@/assets/model18.jpg";
import model19Image from "@/assets/model19.jpg";
import model20Image from "@/assets/model20.jpg";
import model21Image from "@/assets/model21.jpg";
import model22Image from "@/assets/model22.jpg";
import model23Image from "@/assets/model23.jpg";
import model24Image from "@/assets/model24.jpg";
import model25Image from "@/assets/model25.jpg";
import model26Image from "@/assets/model26.jpg";
import model27Image from "@/assets/model27.jpg";
import model28Image from "@/assets/model28.jpg";
import model29Image from "@/assets/model29.jpg";
import model30Image from "@/assets/model30.jpg";
import model31Image from "@/assets/model31.jpg";
import model32Image from "@/assets/model32.jpg";
import model33Image from "@/assets/model33.jpg";
import model34Image from "@/assets/model34.jpg";
import model35Image from "@/assets/model35.jpg";
import model36Image from "@/assets/model36.jpg";
import model37Image from "@/assets/model37.jpg";
import model38Image from "@/assets/model38.jpg";
import model39Image from "@/assets/model39.jpg";
import model40Image from "@/assets/model40.jpg";
import model41Image from "@/assets/model41.jpg";
import model42Image from "@/assets/model42.jpg";
import model43Image from "@/assets/model43.jpg";
import model44Image from "@/assets/model44.jpg";
import model45Image from "@/assets/model45.jpg";
import model46Image from "@/assets/model46.jpg";
import model47Image from "@/assets/model47.jpg";
import model48Image from "@/assets/model48.jpg";
import model49Image from "@/assets/model49.jpg";
import model50Image from "@/assets/model50.jpg";
import model51Image from "@/assets/model51.jpg";

import model53Image from "@/assets/model53.jpg";
import model54Image from "@/assets/model54.jpg";
import model55Image from "@/assets/model55.jpg";
import model56Image from "@/assets/model56.jpg";
import model57Image from "@/assets/model57.jpg";
import model58Image from "@/assets/model58.jpg";
import model59Image from "@/assets/model59.jpg";
import model60Image from "@/assets/model60.jpg";
import model61Image from "@/assets/model61.jpg";
import model62Image from "@/assets/model62.jpg";
import model63Image from "@/assets/model63.jpg";
import model64Image from "@/assets/model64.jpg";
import model65Image from "@/assets/model65.jpg";
import model66Image from "@/assets/model66.jpg";
import model67Image from "@/assets/model67.jpg";
import model68Image from "@/assets/model68.jpg";
import model69Image from "@/assets/model69.jpg";
import model70Image from "@/assets/model70.jpg";
import model71Image from "@/assets/model71.jpg";
import model72Image from "@/assets/model72.jpg";
import model73Image from "@/assets/model73.jpg";
import model74Image from "@/assets/model74.jpg";
import model75Image from "@/assets/model75.jpg";
import model76Image from "@/assets/model76.jpg";
import model77Image from "@/assets/model77.jpg";
import model78Image from "@/assets/model78.jpg";
import model79Image from "@/assets/model79.jpg";
import model80Image from "@/assets/model80.jpg";
import model81Image from "@/assets/model81.jpg";
import model82Image from "@/assets/model82.jpg";
import model83Image from "@/assets/model83.jpg";
import model84Image from "@/assets/model84.jpg";
import model85Image from "@/assets/model85.jpg";
import model86Image from "@/assets/model86.jpg";
import model87Image from "@/assets/model87.jpg";
import model88Image from "@/assets/model88.jpg";
import model89Image from "@/assets/model89.jpg";
import model90Image from "@/assets/model90.jpg";
import model91Image from "@/assets/model91.jpg";
import model92Image from "@/assets/model92.jpg";
import model93Image from "@/assets/model93.jpg";
import model94Image from "@/assets/model94.jpg";
import model95Image from "@/assets/model95.jpg";
import model96Image from "@/assets/model96.jpg";
import model97Image from "@/assets/model97.jpg";
import model98Image from "@/assets/model98.jpg";
import model99Image from "@/assets/model99.jpg";
import model100Image from "@/assets/model100.jpg";
import model101Image from "@/assets/model101.jpg";
import model102Image from "@/assets/model102.jpg";
import model103Image from "@/assets/model103.jpg";
import model104Image from "@/assets/model104.jpg";
import model105Image from "@/assets/model105.jpg";
import model106Image from "@/assets/model106.jpg";
import model107Image from "@/assets/model107.jpg";
import model108Image from "@/assets/model108.jpg";
import model109Image from "@/assets/model109.jpg";
import model110Image from "@/assets/model110.jpg";
import model111Image from "@/assets/model111.jpg";
import model112Image from "@/assets/model112.jpg";
import model113Image from "@/assets/model113.jpg";
import model114Image from "@/assets/model114.jpg";
import model115Image from "@/assets/model115.jpg";
import model116Image from "@/assets/model116.jpg";
import model117Image from "@/assets/model117.jpg";
import model118Image from "@/assets/model118.jpg";
import model119Image from "@/assets/model119.jpg";
import model120Image from "@/assets/model120.jpg";
import model121Image from "@/assets/model121.jpg";
import model122Image from "@/assets/model122.jpg";
import model123Image from "@/assets/model123.jpg";
import model124Image from "@/assets/model124.jpg";
import model125Image from "@/assets/model125.jpg";
import model126Image from "@/assets/model126.jpg";
import model127Image from "@/assets/model127.jpg";
import model128Image from "@/assets/model128.jpg";
import model129Image from "@/assets/model129.jpg";
import model130Image from "@/assets/model130.jpg";
import model131Image from "@/assets/model131.jpg";
import model132Image from "@/assets/model132.jpg";
import model133Image from "@/assets/model133.jpg";
import model134Image from "@/assets/model134.jpg";
import model135Image from "@/assets/model135.jpg";
import model136Image from "@/assets/model136.jpg";
import model137Image from "@/assets/model137.jpg";
import model138Image from "@/assets/model138.jpg";
import model139Image from "@/assets/model139.jpg";
import model140Image from "@/assets/model140.jpg";
import model141Image from "@/assets/model141.jpg";
import model142Image from "@/assets/model142.jpg";
import model143Image from "@/assets/model143.jpg";
import model144Image from "@/assets/model144.jpg";
import model145Image from "@/assets/model145.jpg";
import model146Image from "@/assets/model146.jpg";
import model147Image from "@/assets/model147.jpg";
import model148Image from "@/assets/model148.jpg";
import model149Image from "@/assets/model149.jpg";
import model150Image from "@/assets/model150.jpg";
import model151Image from "@/assets/model151.jpg";
import model152Image from "@/assets/model152.jpg";
import model153Image from "@/assets/model153.jpg";
import model154Image from "@/assets/model154.jpg";
import model155Image from "@/assets/model155.jpg";
import model156Image from "@/assets/model156.jpg";
import model157Image from "@/assets/model157.jpg";
import model158Image from "@/assets/model158.jpg";
import model159Image from "@/assets/model159.jpg";
import model160Image from "@/assets/model160.jpg";
import model161Image from "@/assets/model161.jpg";
import model162Image from "@/assets/model162.jpg";
import model163Image from "@/assets/model163.jpg";
import model164Image from "@/assets/model164.jpg";
import model165Image from "@/assets/model165.jpg";
import model166Image from "@/assets/model166.jpg";
import model167Image from "@/assets/model167.jpg";
import model168Image from "@/assets/model168.jpg";
import model169Image from "@/assets/model169.jpg";
import model170Image from "@/assets/model170.jpg";
import model171Image from "@/assets/model171.jpg";
import model172Image from "@/assets/model172.jpg";
import model173Image from "@/assets/model173.jpg";
import model174Image from "@/assets/model174.jpg";
import model175Image from "@/assets/model175.jpg";
import model176Image from "@/assets/model176.jpg";
import model177Image from "@/assets/model177.jpg";
import model178Image from "@/assets/model178.jpg";
import model179Image from "@/assets/model179.jpg";
import model180Image from "@/assets/model180.jpg";
import model181Image from "@/assets/model181.jpg";
import model182Image from "@/assets/model182.jpg";
import model183Image from "@/assets/model183.jpg";
import model184Image from "@/assets/model184.jpg";
import model185Image from "@/assets/model185.jpg";
import model186Image from "@/assets/model186.jpg";
import model187Image from "@/assets/model187.jpg";
import model188Image from "@/assets/model188.jpg";
import model189Image from "@/assets/model189.jpg";
import model190Image from "@/assets/model190.jpg";
import model191Image from "@/assets/model191.jpg";
import model192Image from "@/assets/model192.jpg";
import model193Image from "@/assets/model193.jpg";
import model194Image from "@/assets/model194.jpg";
import model195Image from "@/assets/model195.jpg";
import model196Image from "@/assets/model196.jpg";
import model197Image from "@/assets/model197.jpg";
import model198Image from "@/assets/model198.jpg";
import model199Image from "@/assets/model199.jpg";
import model200Image from "@/assets/model200.jpg";
import model201Image from "@/assets/model201.jpg";
import model202Image from "@/assets/model202.jpg";
import model203Image from "@/assets/model203.jpg";
import model204Image from "@/assets/model204.jpg";
import model205Image from "@/assets/model205.jpg";
import model206Image from "@/assets/model206.jpg";
import model207Image from "@/assets/model207.jpg";
import model208Image from "@/assets/model208.jpg";
import model209Image from "@/assets/model209.jpg";
import model210Image from "@/assets/model210.jpg";
import model211Image from "@/assets/model211.jpg";
import model212Image from "@/assets/model212.jpg";
import model213Image from "@/assets/model213.jpg";
import model214Image from "@/assets/model214.jpg";
import model215Image from "@/assets/model215.jpg";
import model216Image from "@/assets/model216.jpg";
import model217Image from "@/assets/model217.jpg";
import model218Image from "@/assets/model218.jpg";
import model219Image from "@/assets/model219.jpg";
import model220Image from "@/assets/model220.jpg";

// Region types
type Region = "All" | "Global" | "Philippines" | "Colombia" | "Venezuela" | "Slavic" | "Korea" | "USA" | "Brazil" | "India" | "Romania" | "Spain" | "Vietnam" | "Thailand" | "Iran" | "Japan" | "Italy" | "Peru" | "Mexico" | "Argentina" | "France";

const regions: Region[] = ["All", "Global", "Philippines", "Colombia", "Venezuela", "Slavic", "Korea", "USA", "Brazil", "India", "Romania", "Spain", "Vietnam", "Thailand", "Iran", "Japan", "Italy", "Peru", "Mexico", "Argentina", "France"];

// Model data - diverse portrait pool with regions
const models = [
  { id: 1, name: "Ava", image: model1Image, region: "Global" as Region },
  { id: 2, name: "Mei", image: model2Image, region: "Global" as Region },
  { id: 3, name: "Sofia", image: model3Image, region: "Global" as Region },
  { id: 4, name: "Emma", image: model4Image, region: "Global" as Region },
  { id: 5, name: "Layla", image: model5Image, region: "Global" as Region },
  { id: 6, name: "Priya", image: model6Image, region: "Global" as Region },
  { id: 7, name: "Ruby", image: model7Image, region: "Global" as Region },
  { id: 8, name: "Amara", image: model8Image, region: "Global" as Region },
  { id: 9, name: "Luna", image: model9Image, region: "Global" as Region },
  { id: 10, name: "Yuki", image: model10Image, region: "Global" as Region },
  { id: 11, name: "Hana", image: model11Image, region: "Global" as Region },
  { id: 12, name: "Zara", image: model12Image, region: "Global" as Region },
  { id: 13, name: "Giulia", image: model13Image, region: "Global" as Region },
  { id: 14, name: "Natasha", image: model14Image, region: "Global" as Region },
  { id: 15, name: "Maria", image: model15Image, region: "Global" as Region },
  { id: 16, name: "Astrid", image: model16Image, region: "Global" as Region },
  { id: 17, name: "Suki", image: model17Image, region: "Global" as Region },
  { id: 18, name: "Adaeze", image: model18Image, region: "Global" as Region },
  { id: 19, name: "Valentina", image: model19Image, region: "Global" as Region },
  { id: 20, name: "Sienna", image: model20Image, region: "Global" as Region },
  { id: 21, name: "Ximena", image: model21Image, region: "Global" as Region },
  { id: 22, name: "Camila", image: model22Image, region: "Global" as Region },
  { id: 23, name: "Isabella", image: model23Image, region: "Global" as Region },
  { id: 24, name: "Daniela", image: model24Image, region: "Global" as Region },
  { id: 25, name: "Alejandra", image: model25Image, region: "Global" as Region },
  { id: 26, name: "Yasmín", image: model26Image, region: "Global" as Region },
  { id: 27, name: "Luciana", image: model27Image, region: "Global" as Region },
  { id: 28, name: "Catalina", image: model28Image, region: "Global" as Region },
  { id: 29, name: "Mariana", image: model29Image, region: "Global" as Region },
  { id: 30, name: "Carolina", image: model30Image, region: "Global" as Region },
  // Philippines
  { id: 31, name: "Althea", image: model31Image, region: "Philippines" as Region },
  { id: 32, name: "Jasmine", image: model32Image, region: "Philippines" as Region },
  { id: 33, name: "Bea", image: model33Image, region: "Philippines" as Region },
  { id: 34, name: "Katrina", image: model34Image, region: "Philippines" as Region },
  { id: 35, name: "Angel", image: model35Image, region: "Philippines" as Region },
  { id: 36, name: "Liza", image: model36Image, region: "Philippines" as Region },
  { id: 37, name: "Nadine", image: model37Image, region: "Philippines" as Region },
  { id: 38, name: "Julia", image: model38Image, region: "Philippines" as Region },
  { id: 39, name: "Maja", image: model39Image, region: "Philippines" as Region },
  { id: 40, name: "Kim", image: model40Image, region: "Philippines" as Region },
  // Colombia
  { id: 41, name: "Sofía", image: model41Image, region: "Colombia" as Region },
  { id: 42, name: "Manuela", image: model42Image, region: "Colombia" as Region },
  { id: 43, name: "Natalia", image: model43Image, region: "Colombia" as Region },
  { id: 44, name: "Gabriela", image: model44Image, region: "Colombia" as Region },
  { id: 45, name: "Paula", image: model45Image, region: "Colombia" as Region },
  { id: 46, name: "Andrea", image: model46Image, region: "Colombia" as Region },
  { id: 47, name: "Juliana", image: model47Image, region: "Colombia" as Region },
  { id: 48, name: "Sara", image: model48Image, region: "Colombia" as Region },
  { id: 49, name: "Laura", image: model49Image, region: "Colombia" as Region },
  { id: 50, name: "Diana", image: model50Image, region: "Colombia" as Region },
  // Venezuela
  { id: 51, name: "Adriana", image: model51Image, region: "Venezuela" as Region },
  { id: 53, name: "Génesis", image: model53Image, region: "Venezuela" as Region },
  { id: 54, name: "Mariángel", image: model54Image, region: "Venezuela" as Region },
  { id: 55, name: "Oriana", image: model55Image, region: "Venezuela" as Region },
  { id: 56, name: "Mariela", image: model56Image, region: "Venezuela" as Region },
  { id: 57, name: "Yuliana", image: model57Image, region: "Venezuela" as Region },
  { id: 58, name: "Antonella", image: model58Image, region: "Venezuela" as Region },
  { id: 59, name: "Fabiana", image: model59Image, region: "Venezuela" as Region },
  { id: 60, name: "Stefanía", image: model60Image, region: "Venezuela" as Region },
  // Slavic countries
  { id: 61, name: "Anastasia", image: model61Image, region: "Slavic" as Region },
  { id: 62, name: "Oksana", image: model62Image, region: "Slavic" as Region },
  { id: 63, name: "Kinga", image: model63Image, region: "Slavic" as Region },
  { id: 64, name: "Petra", image: model64Image, region: "Slavic" as Region },
  { id: 65, name: "Milica", image: model65Image, region: "Slavic" as Region },
  { id: 66, name: "Darya", image: model66Image, region: "Slavic" as Region },
  { id: 67, name: "Ivana", image: model67Image, region: "Slavic" as Region },
  { id: 68, name: "Zuzana", image: model68Image, region: "Slavic" as Region },
  { id: 69, name: "Elena", image: model69Image, region: "Slavic" as Region },
  { id: 70, name: "Maja", image: model70Image, region: "Slavic" as Region },
  // Korea
  { id: 71, name: "Jiyeon", image: model71Image, region: "Korea" as Region },
  { id: 72, name: "Sooyoung", image: model72Image, region: "Korea" as Region },
  { id: 73, name: "Minji", image: model73Image, region: "Korea" as Region },
  { id: 74, name: "Yuna", image: model74Image, region: "Korea" as Region },
  { id: 75, name: "Eunji", image: model75Image, region: "Korea" as Region },
  { id: 76, name: "Hyerin", image: model76Image, region: "Korea" as Region },
  { id: 77, name: "Seulgi", image: model77Image, region: "Korea" as Region },
  { id: 78, name: "Dahyun", image: model78Image, region: "Korea" as Region },
  { id: 79, name: "Chaeyoung", image: model79Image, region: "Korea" as Region },
  { id: 80, name: "Nayeon", image: model80Image, region: "Korea" as Region },
  // USA
  { id: 81, name: "Ashley", image: model81Image, region: "USA" as Region },
  { id: 82, name: "Destiny", image: model82Image, region: "USA" as Region },
  { id: 83, name: "Scarlett", image: model83Image, region: "USA" as Region },
  { id: 84, name: "Madison", image: model84Image, region: "USA" as Region },
  { id: 85, name: "Michelle", image: model85Image, region: "USA" as Region },
  { id: 86, name: "Brooklyn", image: model86Image, region: "USA" as Region },
  { id: 87, name: "Alexis", image: model87Image, region: "USA" as Region },
  { id: 88, name: "Riley", image: model88Image, region: "USA" as Region },
  { id: 89, name: "Savannah", image: model89Image, region: "USA" as Region },
  { id: 90, name: "Megan", image: model90Image, region: "USA" as Region },
  // Brazil
  { id: 91, name: "Fernanda", image: model91Image, region: "Brazil" as Region },
  { id: 92, name: "Tainá", image: model92Image, region: "Brazil" as Region },
  { id: 93, name: "Bianca", image: model93Image, region: "Brazil" as Region },
  { id: 94, name: "Raquel", image: model94Image, region: "Brazil" as Region },
  { id: 95, name: "Letícia", image: model95Image, region: "Brazil" as Region },
  { id: 96, name: "Larissa", image: model96Image, region: "Brazil" as Region },
  { id: 97, name: "Beatriz", image: model97Image, region: "Brazil" as Region },
  { id: 98, name: "Giovanna", image: model98Image, region: "Brazil" as Region },
  { id: 99, name: "Yumi", image: model99Image, region: "Brazil" as Region },
  { id: 100, name: "Gisele", image: model100Image, region: "Brazil" as Region },
  // India
  { id: 101, name: "Aishwarya", image: model101Image, region: "India" as Region },
  { id: 102, name: "Deepika", image: model102Image, region: "India" as Region },
  { id: 103, name: "Ananya", image: model103Image, region: "India" as Region },
  { id: 104, name: "Kiara", image: model104Image, region: "India" as Region },
  { id: 105, name: "Shraddha", image: model105Image, region: "India" as Region },
  { id: 106, name: "Alia", image: model106Image, region: "India" as Region },
  { id: 107, name: "Disha", image: model107Image, region: "India" as Region },
  { id: 108, name: "Tara", image: model108Image, region: "India" as Region },
  { id: 109, name: "Janhvi", image: model109Image, region: "India" as Region },
  { id: 110, name: "Pooja", image: model110Image, region: "India" as Region },
  // Romania
  { id: 111, name: "Ioana", image: model111Image, region: "Romania" as Region },
  { id: 112, name: "Andreea", image: model112Image, region: "Romania" as Region },
  { id: 113, name: "Raluca", image: model113Image, region: "Romania" as Region },
  { id: 114, name: "Miruna", image: model114Image, region: "Romania" as Region },
  { id: 115, name: "Alina", image: model115Image, region: "Romania" as Region },
  { id: 116, name: "Elena", image: model116Image, region: "Romania" as Region },
  { id: 117, name: "Cristina", image: model117Image, region: "Romania" as Region },
  { id: 118, name: "Denisa", image: model118Image, region: "Romania" as Region },
  { id: 119, name: "Madalina", image: model119Image, region: "Romania" as Region },
  { id: 120, name: "Alexandra", image: model120Image, region: "Romania" as Region },
  // Spain
  { id: 121, name: "Lucia", image: model121Image, region: "Spain" as Region },
  { id: 122, name: "Carmen", image: model122Image, region: "Spain" as Region },
  { id: 123, name: "Sofia", image: model123Image, region: "Spain" as Region },
  { id: 124, name: "Paula", image: model124Image, region: "Spain" as Region },
  { id: 125, name: "Marta", image: model125Image, region: "Spain" as Region },
  { id: 126, name: "Alba", image: model126Image, region: "Spain" as Region },
  { id: 127, name: "Maria", image: model127Image, region: "Spain" as Region },
  { id: 128, name: "Claudia", image: model128Image, region: "Spain" as Region },
  { id: 129, name: "Elena", image: model129Image, region: "Spain" as Region },
  { id: 130, name: "Ines", image: model130Image, region: "Spain" as Region },
  // Vietnam
  { id: 131, name: "Linh", image: model131Image, region: "Vietnam" as Region },
  { id: 132, name: "Ngoc", image: model132Image, region: "Vietnam" as Region },
  { id: 133, name: "Thao", image: model133Image, region: "Vietnam" as Region },
  { id: 134, name: "Huong", image: model134Image, region: "Vietnam" as Region },
  { id: 135, name: "Mai", image: model135Image, region: "Vietnam" as Region },
  { id: 136, name: "Lan", image: model136Image, region: "Vietnam" as Region },
  { id: 137, name: "Trang", image: model137Image, region: "Vietnam" as Region },
  { id: 138, name: "Yen", image: model138Image, region: "Vietnam" as Region },
  { id: 139, name: "Hanh", image: model139Image, region: "Vietnam" as Region },
  { id: 140, name: "Phuong", image: model140Image, region: "Vietnam" as Region },
  // Thailand
  { id: 141, name: "Ploy", image: model141Image, region: "Thailand" as Region },
  { id: 142, name: "Namtan", image: model142Image, region: "Thailand" as Region },
  { id: 143, name: "Pim", image: model143Image, region: "Thailand" as Region },
  { id: 144, name: "Fah", image: model144Image, region: "Thailand" as Region },
  { id: 145, name: "Bow", image: model145Image, region: "Thailand" as Region },
  { id: 146, name: "Mint", image: model146Image, region: "Thailand" as Region },
  { id: 147, name: "Aom", image: model147Image, region: "Thailand" as Region },
  { id: 148, name: "Noon", image: model148Image, region: "Thailand" as Region },
  { id: 149, name: "Kwan", image: model149Image, region: "Thailand" as Region },
  { id: 150, name: "Praew", image: model150Image, region: "Thailand" as Region },
  // Iran
  { id: 151, name: "Shirin", image: model151Image, region: "Iran" as Region },
  { id: 152, name: "Nazanin", image: model152Image, region: "Iran" as Region },
  { id: 153, name: "Maryam", image: model153Image, region: "Iran" as Region },
  { id: 154, name: "Parisa", image: model154Image, region: "Iran" as Region },
  { id: 155, name: "Leila", image: model155Image, region: "Iran" as Region },
  { id: 156, name: "Niloufar", image: model156Image, region: "Iran" as Region },
  { id: 157, name: "Anahita", image: model157Image, region: "Iran" as Region },
  { id: 158, name: "Fatemeh", image: model158Image, region: "Iran" as Region },
  { id: 159, name: "Yasmin", image: model159Image, region: "Iran" as Region },
  { id: 160, name: "Darya", image: model160Image, region: "Iran" as Region },
  // Japan
  { id: 161, name: "Yuki", image: model161Image, region: "Japan" as Region },
  { id: 162, name: "Sakura", image: model162Image, region: "Japan" as Region },
  { id: 163, name: "Haruka", image: model163Image, region: "Japan" as Region },
  { id: 164, name: "Aoi", image: model164Image, region: "Japan" as Region },
  { id: 165, name: "Mio", image: model165Image, region: "Japan" as Region },
  { id: 166, name: "Rina", image: model166Image, region: "Japan" as Region },
  { id: 167, name: "Yui", image: model167Image, region: "Japan" as Region },
  { id: 168, name: "Nanami", image: model168Image, region: "Japan" as Region },
  { id: 169, name: "Hina", image: model169Image, region: "Japan" as Region },
  { id: 170, name: "Mei", image: model170Image, region: "Japan" as Region },
  // Italy
  { id: 171, name: "Giulia", image: model171Image, region: "Italy" as Region },
  { id: 172, name: "Francesca", image: model172Image, region: "Italy" as Region },
  { id: 173, name: "Chiara", image: model173Image, region: "Italy" as Region },
  { id: 174, name: "Valentina", image: model174Image, region: "Italy" as Region },
  { id: 175, name: "Alessia", image: model175Image, region: "Italy" as Region },
  { id: 176, name: "Martina", image: model176Image, region: "Italy" as Region },
  { id: 177, name: "Sara", image: model177Image, region: "Italy" as Region },
  { id: 178, name: "Giorgia", image: model178Image, region: "Italy" as Region },
  { id: 179, name: "Elisa", image: model179Image, region: "Italy" as Region },
  { id: 180, name: "Federica", image: model180Image, region: "Italy" as Region },
  // Peru
  { id: 181, name: "Milagros", image: model181Image, region: "Peru" as Region },
  { id: 182, name: "Luciana", image: model182Image, region: "Peru" as Region },
  { id: 183, name: "Camila", image: model183Image, region: "Peru" as Region },
  { id: 184, name: "Valeria", image: model184Image, region: "Peru" as Region },
  { id: 185, name: "Ximena", image: model185Image, region: "Peru" as Region },
  { id: 186, name: "Flor", image: model186Image, region: "Peru" as Region },
  { id: 187, name: "Rocio", image: model187Image, region: "Peru" as Region },
  { id: 188, name: "Luz", image: model188Image, region: "Peru" as Region },
  { id: 189, name: "Pilar", image: model189Image, region: "Peru" as Region },
  { id: 190, name: "Rosa", image: model190Image, region: "Peru" as Region },
  // Mexico
  { id: 191, name: "Guadalupe", image: model191Image, region: "Mexico" as Region },
  { id: 192, name: "Fernanda", image: model192Image, region: "Mexico" as Region },
  { id: 193, name: "Ximena", image: model193Image, region: "Mexico" as Region },
  { id: 194, name: "Regina", image: model194Image, region: "Mexico" as Region },
  { id: 195, name: "Paola", image: model195Image, region: "Mexico" as Region },
  { id: 196, name: "Mariana", image: model196Image, region: "Mexico" as Region },
  { id: 197, name: "Dulce", image: model197Image, region: "Mexico" as Region },
  { id: 198, name: "Itzel", image: model198Image, region: "Mexico" as Region },
  { id: 199, name: "Citlali", image: model199Image, region: "Mexico" as Region },
  { id: 200, name: "Jimena", image: model200Image, region: "Mexico" as Region },
  // Argentina
  { id: 201, name: "Luciana", image: model201Image, region: "Argentina" as Region },
  { id: 202, name: "Agustina", image: model202Image, region: "Argentina" as Region },
  { id: 203, name: "Florencia", image: model203Image, region: "Argentina" as Region },
  { id: 204, name: "Martina", image: model204Image, region: "Argentina" as Region },
  { id: 205, name: "Catalina", image: model205Image, region: "Argentina" as Region },
  { id: 206, name: "Milagros", image: model206Image, region: "Argentina" as Region },
  { id: 207, name: "Rocio", image: model207Image, region: "Argentina" as Region },
  { id: 208, name: "Soledad", image: model208Image, region: "Argentina" as Region },
  { id: 209, name: "Pilar", image: model209Image, region: "Argentina" as Region },
  { id: 210, name: "Valentina", image: model210Image, region: "Argentina" as Region },
  // France
  { id: 211, name: "Camille", image: model211Image, region: "France" as Region },
  { id: 212, name: "Léa", image: model212Image, region: "France" as Region },
  { id: 213, name: "Manon", image: model213Image, region: "France" as Region },
  { id: 214, name: "Chloé", image: model214Image, region: "France" as Region },
  { id: 215, name: "Inès", image: model215Image, region: "France" as Region },
  { id: 216, name: "Emma", image: model216Image, region: "France" as Region },
  { id: 217, name: "Louise", image: model217Image, region: "France" as Region },
  { id: 218, name: "Juliette", image: model218Image, region: "France" as Region },
  { id: 219, name: "Margot", image: model219Image, region: "France" as Region },
  { id: 220, name: "Adèle", image: model220Image, region: "France" as Region },
];

// Sound effect utilities using Web Audio API
const createAudioContext = () => {
  return new (window.AudioContext || (window as any).webkitAudioContext)();
};

const playHotSound = (audioContext: AudioContext) => {
  const now = audioContext.currentTime;
  const notes = [440, 554, 659, 880];
  
  notes.forEach((freq, i) => {
    const osc = audioContext.createOscillator();
    const gain = audioContext.createGain();
    const filter = audioContext.createBiquadFilter();
    
    filter.type = "lowpass";
    filter.frequency.value = 2000;
    
    osc.type = "sine";
    osc.frequency.value = freq;
    
    osc.connect(filter);
    filter.connect(gain);
    gain.connect(audioContext.destination);
    
    const startTime = now + i * 0.08;
    gain.gain.setValueAtTime(0, startTime);
    gain.gain.linearRampToValueAtTime(0.15, startTime + 0.05);
    gain.gain.exponentialRampToValueAtTime(0.01, startTime + 0.4);
    
    osc.start(startTime);
    osc.stop(startTime + 0.5);
  });
  
  const shimmer = audioContext.createOscillator();
  const shimmerGain = audioContext.createGain();
  shimmer.type = "triangle";
  shimmer.frequency.value = 1760;
  shimmer.connect(shimmerGain);
  shimmerGain.connect(audioContext.destination);
  shimmerGain.gain.setValueAtTime(0, now + 0.2);
  shimmerGain.gain.linearRampToValueAtTime(0.08, now + 0.3);
  shimmerGain.gain.exponentialRampToValueAtTime(0.01, now + 0.8);
  shimmer.start(now + 0.2);
  shimmer.stop(now + 1);
};

const playNotSound = (audioContext: AudioContext) => {
  const now = audioContext.currentTime;
  const osc = audioContext.createOscillator();
  const gain = audioContext.createGain();
  
  osc.type = "sine";
  osc.frequency.setValueAtTime(300, now);
  osc.frequency.exponentialRampToValueAtTime(150, now + 0.3);
  
  osc.connect(gain);
  gain.connect(audioContext.destination);
  
  gain.gain.setValueAtTime(0.12, now);
  gain.gain.exponentialRampToValueAtTime(0.01, now + 0.3);
  
  osc.start(now);
  osc.stop(now + 0.4);
};

interface FloatingHeart {
  id: number;
  x: number;
  y: number;
  scale: number;
  rotation: number;
}

interface CatCardProps {
  image: string;
  name: string;
  score: number;
  onHot: () => void;
  onNot: () => void;
  isAnimating: boolean;
  hearts: FloatingHeart[];
  isExiting: boolean;
  exitDirection: "left" | "right" | null;
}

const CatCard = ({ image, name, score, onHot, onNot, isAnimating, hearts, isExiting, exitDirection }: CatCardProps) => {
  const [touchStart, setTouchStart] = useState<{ x: number; y: number } | null>(null);
  const [touchCurrent, setTouchCurrent] = useState<{ x: number; y: number } | null>(null);
  const [swiping, setSwiping] = useState(false);
  const [hasVibrated, setHasVibrated] = useState(false);

  const swipeThreshold = 80;
  const swipeDelta = touchStart && touchCurrent ? touchCurrent.x - touchStart.x : 0;
  const swipeProgress = Math.min(Math.abs(swipeDelta) / swipeThreshold, 1);
  const swipeDirection = swipeDelta > 0 ? "right" : "left";

  // Haptic feedback when crossing threshold
  const triggerHaptic = useCallback((pattern: number | number[]) => {
    if ('vibrate' in navigator) {
      navigator.vibrate(pattern);
    }
  }, []);

  const handleTouchStart = (e: React.TouchEvent) => {
    if (isExiting) return;
    const touch = e.touches[0];
    setTouchStart({ x: touch.clientX, y: touch.clientY });
    setTouchCurrent({ x: touch.clientX, y: touch.clientY });
    setSwiping(true);
    setHasVibrated(false);
  };

  const handleTouchMove = (e: React.TouchEvent) => {
    if (!swiping || isExiting) return;
    const touch = e.touches[0];
    setTouchCurrent({ x: touch.clientX, y: touch.clientY });
    
    // Vibrate when crossing the threshold
    const currentDelta = touch.clientX - (touchStart?.x || 0);
    if (Math.abs(currentDelta) >= swipeThreshold && !hasVibrated) {
      triggerHaptic(25);
      setHasVibrated(true);
    } else if (Math.abs(currentDelta) < swipeThreshold && hasVibrated) {
      setHasVibrated(false);
    }
  };

  const handleTouchEnd = () => {
    if (!swiping || isExiting) return;
    
    if (Math.abs(swipeDelta) >= swipeThreshold) {
      // Strong vibration on action
      triggerHaptic(swipeDirection === "right" ? [30, 50, 30] : [20]);
      if (swipeDirection === "right") {
        onHot();
      } else {
        onNot();
      }
    }
    
    setTouchStart(null);
    setTouchCurrent(null);
    setSwiping(false);
    setHasVibrated(false);
  };

  return (
    <div className="group relative flex flex-col items-center">
      {/* Card */}
      <AnimatePresence mode="wait">
        <motion.div 
          key={`${name}-${image}`}
          className="relative overflow-visible rounded-3xl glass shadow-card transition-all duration-500 hover:shadow-card-hover hover:-translate-y-2 touch-pan-y select-none"
          initial={{ opacity: 0, scale: 0.8, x: 0 }}
          animate={{ 
            opacity: isExiting ? 0 : 1, 
            scale: isExiting ? 0.8 : 1,
            x: isExiting ? (exitDirection === "right" ? 200 : -200) : (swiping ? swipeDelta * 0.5 : 0),
            rotate: isExiting ? (exitDirection === "right" ? 15 : -15) : (swiping ? swipeDelta * 0.05 : 0),
          }}
          exit={{ opacity: 0, scale: 0.8, x: exitDirection === "right" ? 200 : -200 }}
          transition={{ duration: swiping ? 0 : 0.4, ease: "easeOut" }}
          onTouchStart={handleTouchStart}
          onTouchMove={handleTouchMove}
          onTouchEnd={handleTouchEnd}
        >
          {/* Swipe Indicators */}
          {swiping && swipeProgress > 0.2 && (
            <>
              <motion.div 
                className="absolute inset-0 rounded-3xl z-10 pointer-events-none flex items-center justify-center"
                initial={{ opacity: 0 }}
                animate={{ 
                  opacity: swipeDirection === "right" ? swipeProgress * 0.8 : 0,
                  background: "linear-gradient(135deg, hsla(340, 82%, 52%, 0.3), transparent)"
                }}
              >
                <div className="bg-primary/90 rounded-full p-4">
                  <Flame className="w-10 h-10 text-white" />
                </div>
              </motion.div>
              <motion.div 
                className="absolute inset-0 rounded-3xl z-10 pointer-events-none flex items-center justify-center"
                initial={{ opacity: 0 }}
                animate={{ 
                  opacity: swipeDirection === "left" ? swipeProgress * 0.8 : 0,
                  background: "linear-gradient(135deg, hsla(0, 0%, 50%, 0.3), transparent)"
                }}
              >
                <div className="bg-muted-foreground/90 rounded-full p-4">
                  <X className="w-10 h-10 text-white" />
                </div>
              </motion.div>
            </>
          )}

          {/* Image Container */}
          <div className="relative w-64 h-80 sm:w-72 sm:h-96 overflow-hidden rounded-3xl">
            <img
              src={image}
              alt={name}
              className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
              draggable={false}
            />
            
            {/* Gradient Overlay */}
            <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent" />
            
            {/* Score Badge */}
            <motion.div 
              className="absolute top-4 right-4 flex items-center gap-1.5 px-3 py-1.5 rounded-full glass shadow-lg"
              animate={isAnimating ? { scale: [1, 1.2, 1] } : {}}
              transition={{ duration: 0.3 }}
            >
              <Heart className="w-4 h-4 text-primary fill-primary" />
              <span className="font-bold text-foreground">{score}</span>
            </motion.div>
            
            {/* Name */}
            <div className="absolute bottom-4 left-4 right-4">
              <h3 className="text-xl font-bold text-white drop-shadow-lg">{name}</h3>
            </div>
          </div>
          
          {/* Floating Hearts */}
          <AnimatePresence>
            {hearts.map((heart) => (
              <motion.div
                key={heart.id}
                className="absolute pointer-events-none"
                style={{ 
                  left: `${heart.x}%`, 
                  top: `${heart.y}%`,
                }}
                initial={{ 
                  opacity: 1, 
                  scale: 0, 
                  y: 0,
                  rotate: 0,
                }}
                animate={{ 
                  opacity: [1, 1, 0], 
                  scale: [0, heart.scale, heart.scale * 0.8],
                  y: -150,
                  rotate: heart.rotation,
                }}
                exit={{ opacity: 0 }}
                transition={{ 
                  duration: 1.2,
                  ease: "easeOut",
                }}
              >
                <Heart 
                  className="w-8 h-8 text-primary fill-primary drop-shadow-lg" 
                  style={{ filter: 'drop-shadow(0 0 8px hsl(340, 82%, 62%))' }}
                />
              </motion.div>
            ))}
          </AnimatePresence>
        </motion.div>
      </AnimatePresence>
      
      {/* Action Buttons */}
      <div className="flex gap-4 mt-6">
        <Button
          variant="not"
          size="lg"
          onClick={onNot}
          className="rounded-full w-14 h-14 p-0"
          disabled={isExiting}
        >
          <X className="w-6 h-6" />
        </Button>
        <Button
          variant="hot"
          size="lg"
          onClick={onHot}
          className="rounded-full w-14 h-14 p-0"
          disabled={isExiting}
        >
          <Flame className="w-6 h-6" />
        </Button>
      </div>
    </div>
  );
};

const CatMemChex = () => {
  const [selectedRegion, setSelectedRegion] = useState<Region>(() => {
    const saved = localStorage.getItem("catmemchex-region");
    return saved ? (saved as Region) : "All";
  });
  const [isFilterOpen, setIsFilterOpen] = useState(false);
  
  // Persist voted model IDs
  const [votedModels, setVotedModels] = useState<Set<number>>(() => {
    const saved = localStorage.getItem("catmemchex-voted");
    return saved ? new Set(JSON.parse(saved)) : new Set();
  });
  
  const filteredModels = selectedRegion === "All" 
    ? models 
    : models.filter(m => m.region === selectedRegion);

  // Get unvoted models for current filter
  const getUnvotedModels = useCallback((region: Region) => {
    const filtered = region === "All" ? models : models.filter(m => m.region === region);
    return filtered.filter(m => !votedModels.has(m.id));
  }, [votedModels]);

  const [currentModels, setCurrentModels] = useState<{ card1: number; card2: number }>(() => {
    const saved = localStorage.getItem("catmemchex-current");
    if (saved) {
      return JSON.parse(saved);
    }
    // Default to Althea (id 31) and Adriana (id 51)
    const altheaIndex = models.findIndex(m => m.id === 31);
    const adrianaIndex = models.findIndex(m => m.id === 51);
    return { card1: altheaIndex >= 0 ? altheaIndex : 0, card2: adrianaIndex >= 0 ? adrianaIndex : 1 };
  });

  const [scores, setScores] = useState<Record<number, number>>(() => {
    const saved = localStorage.getItem("catmemchex-scores-v2");
    return saved ? JSON.parse(saved) : {};
  });
  
  const [animating, setAnimating] = useState<{ card1: boolean; card2: boolean }>({
    card1: false,
    card2: false,
  });

  const [exiting, setExiting] = useState<{ card1: boolean; card2: boolean }>({
    card1: false,
    card2: false,
  });

  const [exitDirection, setExitDirection] = useState<{ card1: "left" | "right" | null; card2: "left" | "right" | null }>({
    card1: null,
    card2: null,
  });

  const [hearts, setHearts] = useState<{ card1: FloatingHeart[]; card2: FloatingHeart[] }>({
    card1: [],
    card2: [],
  });

  const [heartId, setHeartId] = useState(0);
  const audioContextRef = useRef<AudioContext | null>(null);

  const getAudioContext = useCallback(() => {
    if (!audioContextRef.current) {
      audioContextRef.current = createAudioContext();
    }
    if (audioContextRef.current.state === "suspended") {
      audioContextRef.current.resume();
    }
    return audioContextRef.current;
  }, []);

  // Persist scores
  useEffect(() => {
    localStorage.setItem("catmemchex-scores-v2", JSON.stringify(scores));
  }, [scores]);

  // Persist current models
  useEffect(() => {
    localStorage.setItem("catmemchex-current", JSON.stringify(currentModels));
  }, [currentModels]);

  // Persist voted models
  useEffect(() => {
    localStorage.setItem("catmemchex-voted", JSON.stringify([...votedModels]));
  }, [votedModels]);

  // Persist selected region
  useEffect(() => {
    localStorage.setItem("catmemchex-region", selectedRegion);
  }, [selectedRegion]);

  // Reset cards when filter changes
  useEffect(() => {
    if (filteredModels.length >= 2) {
      setCurrentModels({ card1: 0, card2: 1 });
    } else if (filteredModels.length === 1) {
      setCurrentModels({ card1: 0, card2: 0 });
    }
  }, [selectedRegion, filteredModels.length]);

  const getNextModelIndex = (currentIndex: number, otherCardIndex: number) => {
    let nextIndex = (currentIndex + 1) % filteredModels.length;
    // Avoid showing the same model on both cards
    if (nextIndex === otherCardIndex) {
      nextIndex = (nextIndex + 1) % filteredModels.length;
    }
    return nextIndex;
  };

  const spawnHearts = useCallback((card: "card1" | "card2") => {
    const newHearts: FloatingHeart[] = Array.from({ length: 6 }, (_, i) => ({
      id: heartId + i,
      x: 20 + Math.random() * 60,
      y: 30 + Math.random() * 40,
      scale: 0.6 + Math.random() * 0.8,
      rotation: -30 + Math.random() * 60,
    }));

    setHeartId((prev) => prev + 6);
    setHearts((prev) => ({ ...prev, [card]: [...prev[card], ...newHearts] }));

    setTimeout(() => {
      setHearts((prev) => ({
        ...prev,
        [card]: prev[card].filter((h) => !newHearts.find((nh) => nh.id === h.id)),
      }));
    }, 1500);
  }, [heartId]);

  const transitionToNextCard = (card: "card1" | "card2", direction: "left" | "right") => {
    setExiting((prev) => ({ ...prev, [card]: true }));
    setExitDirection((prev) => ({ ...prev, [card]: direction }));

    setTimeout(() => {
      const otherCard = card === "card1" ? "card2" : "card1";
      setCurrentModels((prev) => ({
        ...prev,
        [card]: getNextModelIndex(prev[card], prev[otherCard]),
      }));
      setExiting((prev) => ({ ...prev, [card]: false }));
      setExitDirection((prev) => ({ ...prev, [card]: null }));
    }, 500);
  };

  const handleHot = (card: "card1" | "card2") => {
    const model = filteredModels[currentModels[card]];
    const modelId = model.id;
    setScores((prev) => ({ ...prev, [modelId]: (prev[modelId] || 0) + 1 }));
    setVotedModels((prev) => new Set([...prev, modelId]));
    setAnimating((prev) => ({ ...prev, [card]: true }));
    spawnHearts(card);
    playHotSound(getAudioContext());
    
    setTimeout(() => {
      setAnimating((prev) => ({ ...prev, [card]: false }));
      transitionToNextCard(card, "right");
    }, 600);
  };

  const handleNot = (card: "card1" | "card2") => {
    const model = filteredModels[currentModels[card]];
    const modelId = model.id;
    setVotedModels((prev) => new Set([...prev, modelId]));
    setAnimating((prev) => ({ ...prev, [card]: true }));
    playNotSound(getAudioContext());
    
    setTimeout(() => {
      setAnimating((prev) => ({ ...prev, [card]: false }));
      transitionToNextCard(card, "left");
    }, 400);
  };

  const card1Model = filteredModels[currentModels.card1];
  const card2Model = filteredModels[currentModels.card2];

  return (
    <div className="min-h-screen bg-background flex flex-col overflow-hidden">
      {/* Header */}
      <header className="py-8 px-4 text-center">
        <div className="flex items-center justify-center gap-3 mb-2 relative">
          {/* Sparkle particles */}
          {[...Array(12)].map((_, i) => (
            <motion.div
              key={i}
              className="absolute pointer-events-none"
              style={{
                left: `${10 + (i % 6) * 15}%`,
                top: `${i < 6 ? -10 : 100}%`,
              }}
              animate={{
                y: [0, -20, 0],
                x: [0, (i % 2 === 0 ? 10 : -10), 0],
                opacity: [0, 1, 0],
                scale: [0, 1.2, 0],
                rotate: [0, 180, 360],
              }}
              transition={{
                duration: 2 + Math.random(),
                repeat: Infinity,
                delay: i * 0.2,
                ease: "easeInOut",
              }}
            >
              <svg 
                width="16" 
                height="16" 
                viewBox="0 0 24 24" 
                fill="none"
                className="drop-shadow-lg"
              >
                <path 
                  d="M12 0L14.59 8.41L23 11L14.59 13.59L12 22L9.41 13.59L1 11L9.41 8.41L12 0Z" 
                  fill={`hsl(${(i * 60) % 360}, 100%, 70%)`}
                />
              </svg>
            </motion.div>
          ))}
          
          <motion.div
            animate={{ y: [0, -8, 0] }}
            transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
            className="relative flex items-center justify-center"
          >
            <Heart className="w-8 h-8 text-primary fill-primary" />
            <span className="absolute inset-0 flex items-center justify-center text-primary-foreground text-xs font-bold">
              6
            </span>
          </motion.div>
          <h1 className="text-4xl sm:text-5xl font-bold splash-title">
            Lovable
          </h1>
          <motion.div
            animate={{ y: [0, -8, 0] }}
            transition={{ duration: 2, repeat: Infinity, ease: "easeInOut", delay: 0.5 }}
            className="relative flex items-center justify-center"
          >
            <Heart className="w-8 h-8 text-primary fill-primary" />
            <span className="absolute inset-0 flex items-center justify-center text-primary-foreground text-xs font-bold">
              9
            </span>
          </motion.div>
        </div>
        <p className="text-muted-foreground text-lg">hit me up</p>
        
        {/* Region Filter */}
        <div className="relative mt-4">
          <button
            onClick={() => setIsFilterOpen(!isFilterOpen)}
            className="flex items-center gap-2 px-4 py-2 rounded-full bg-card border border-border hover:bg-accent transition-colors"
          >
            <span className="text-sm font-medium text-foreground">
              {selectedRegion === "All" ? "All Regions" : selectedRegion}
            </span>
            <ChevronDown className={`w-4 h-4 text-muted-foreground transition-transform ${isFilterOpen ? 'rotate-180' : ''}`} />
          </button>
          
          {isFilterOpen && (
            <div className="absolute top-full left-1/2 -translate-x-1/2 mt-2 py-2 bg-card border border-border rounded-xl shadow-lg z-50 min-w-[160px]">
              {regions.map((region) => (
                <button
                  key={region}
                  onClick={() => {
                    setSelectedRegion(region);
                    setIsFilterOpen(false);
                  }}
                  className={`w-full px-4 py-2 text-left text-sm hover:bg-accent transition-colors ${
                    selectedRegion === region ? 'text-primary font-medium' : 'text-foreground'
                  }`}
                >
                  {region === "All" ? "All Regions" : region}
                </button>
              ))}
            </div>
          )}
        </div>
      </header>

      {/* Main Content */}
      <main className="flex-1 flex items-center justify-center px-4 pb-12">
        <div className="flex flex-col sm:flex-row gap-8 sm:gap-12 items-center">
          <CatCard
            image={card1Model.image}
            name={card1Model.name}
            score={scores[card1Model.id] || 0}
            onHot={() => handleHot("card1")}
            onNot={() => handleNot("card1")}
            isAnimating={animating.card1}
            hearts={hearts.card1}
            isExiting={exiting.card1}
            exitDirection={exitDirection.card1}
          />
          
          {/* VS Badge */}
          <motion.div 
            className="hidden sm:flex items-center justify-center w-16 h-16 rounded-full gradient-primary shadow-glow"
            animate={{ scale: [1, 1.05, 1] }}
            transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
          >
            <span className="text-xl font-extrabold text-white">VS</span>
          </motion.div>
          
          <CatCard
            image={card2Model.image}
            name={card2Model.name}
            score={scores[card2Model.id] || 0}
            onHot={() => handleHot("card2")}
            onNot={() => handleNot("card2")}
            isAnimating={animating.card2}
            hearts={hearts.card2}
            isExiting={exiting.card2}
            exitDirection={exitDirection.card2}
          />
        </div>
      </main>

      {/* Footer */}
      <footer className="py-4 text-center">
        <p className="text-sm text-muted-foreground">
          Tap <Flame className="w-4 h-4 inline text-primary" /> for Pull • Tap <X className="w-4 h-4 inline text-muted-foreground" /> for Push
        </p>
      </footer>
    </div>
  );
};

export default CatMemChex;
