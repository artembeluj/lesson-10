/*

1. Отримаємо рік у вигляді цілого числа.
2. Повертає true, якщо рік високосний, і false - якщо ні.
3. Якщо отримує некорректні дані, викидає помилку з правильним
текстом.

2008 - true
2003 - false
1900 - false
2000 - true

41 - error 'year must be 42 or more'
2008.4 - error 'year must be integer'
() - error 'year must be exist'
'2008' - error 'year must be number'
false - error 'year must be number'
true - error 'year must be number'
null - error 'year must be number'
()=>{} - error 'year must be number'
{} - error 'year must be number'
[] - error 'year must be number'
*/

const isLeapYear = require("./isLeapYear");

describe("test isLeapYear function", ()=> {
    test("2008 - true", ()=> {
        const result = isLeapYear(2008);
        expect(result).toBe(true);
    });

    it("2003 - false", ()=> {
        expect(isLeapYear(2003)).toBe(false);
    });

    it("1900 - false", ()=> {
        expect(isLeapYear(1900)).toBe(false);
    });

    it("2000 - true", ()=> {
        expect(isLeapYear(2000)).toBe(true);
    });

    it("41 - error 'year must be 42 or more'", ()=> {
        expect(()=> isLeapYear(41)).toThrow("year must be 42 or more");
    });

    it("2008.4 - error 'year must be integer'", ()=> {
        expect(()=> isLeapYear(2008.4)).toThrow("year must be integer");
    });

    it("() - error 'year must exist'", ()=> {
        expect(()=> isLeapYear()).toThrow("year must be exist");
    });

    it("'2008' - error 'year must be number'", ()=> {
        expect(()=> isLeapYear('2008')).toThrow("year must be number");
    });

    it("false - error 'year must be number'", ()=> {
        expect(()=> isLeapYear(false)).toThrow("year must be number");
    });

    it("()=>{} - error 'year must be number'", ()=> {
        expect(()=> isLeapYear(()=>{})).toThrow("year must be number");
    });

    // it("", ()=> {
    //     expect().toBe();
    // });
});


