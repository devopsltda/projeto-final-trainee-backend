// @ts-ignore
import supertest from "supertest";
import app from "../index.js";


// @ts-ignore
describe("POST /post", () => {
    // @ts-ignore
    it("201:post criado com sucesso", async () => {
      let post = {
        user_id:2,
        title: "davi",
        body: "lucasemanoel",
        date:"2024-08-15 13:45:00"
      };
      await supertest(app)
        .post("/createpost")
        .send(post)
        .expect(201)
        // @ts-ignore
        .expect((res) => {
          try {
            let { message } = res.body;
            // @ts-ignore
            expect(message).toBe("201 : post criado com sucesso");
          } catch (error) {
            throw new Error(`error ${res} 
                                   ${error}`);
          }
        });
    });

    // @ts-ignore
    it("400:faltando dados",async ()=>{
      let post = {
        user_id:2,
        title: "",
        body: "lucasemanoel",
        date:"2024-08-15 13:45:00"
      };
      await supertest(app)
        .post("/createpost")
        .send(post)
        .expect(400)
        // @ts-ignore
        .expect((res) => {
          let { message } = res.body;
          // @ts-ignore
          expect(message).toBe("Preencha todos os dados");
        });

      
    })

    
  
  });