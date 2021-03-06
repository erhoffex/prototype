import { InMemoryDbService } from 'angular-in-memory-web-api';

export class InMemoryDataService implements InMemoryDbService {
  createDb() {
    let items = [
      { id: 0, name: "Green Vase" , 
               caption: "A celadon ceramic from Japan, 1855" , 
               description: "Grandma Clara purchased this vase on a trip to Japan. "+
                            "She traveled to Kobe to visit her aunt, uncle, and cousins. "+
                            "She told Mom that she purchased the vase from an antique dealer in Kobe.",
               tags: ["Japan", "Clara", "Antique"] },
      { id: 1, name: "Rocket Belt" ,
               caption: "A real working jetpack!",
               description: "Designed by Wendell Moore in 1965, this jetpack has had a long and sordid history.",
               tags: ["technology", "", ""] },
      { id: 2, name: "Glowing Briefcase" ,
               caption: "A case with mysterious glowing contents.",
               description: "I still have no idea what's in it. "+
                            "The only think I remember about the original owner of this briefcase "+
                            "is that he definitely does not look like a bitch.",
               tags: ["valuable", "mystery", "fictional"],
               imageUrl: "./graphics/briefcase.jpg"} ,
      { id: 3, name: "Gold Ring",
               caption: "A simple gold band with some fancy squiggles inside.",
               description: "This ring was a gift from my cousin. He claims to have 'found it' while out walking one day, "+
               "but I'm not sure I believe him. Renders the wearer invisible, but also subject to increased NSA scrutiny.",
               tags: ["unique", "powerful", "fictional"] }
    ];
    return {items};
  }
}