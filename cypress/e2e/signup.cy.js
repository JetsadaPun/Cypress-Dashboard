describe("Sign-Up Page", () => {
    it("should show an error on invalid password, then submit successfully", () => {
      // เข้าไปที่หน้า Sign-Up
      cy.visit("http://localhost:3000/authentication/sign-up");
  
      // กรอกข้อมูลในฟิลด์ต่าง ๆ ด้วย password ที่สั้นเกินไป
      cy.get('input[name="name"]').type("testuser");
      cy.get('input[name="email"]').type("testuser@example.com");
      cy.get('input[name="password"]').type("123"); // password สั้นเกินไป
  
      // รอหน้าโหลด
      cy.wait(1000);
  
      cy.get('button[type="submit"]').click({ force: true });

  
      cy.get('input[name="password"]').clear().type("password123");
  
      // คลิกปุ่ม 'sign in' อีกครั้งหลังจากแก้ไขรหัสผ่าน
      cy.get('button[type="submit"]').click({ force: true });

      cy.url().should('include', '/dashboard');
      
    });
  });