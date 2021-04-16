var {tickets, getSum, getQuntityPostsByAuthor,cache , complexFunction} = require('./main.js')

describe("tickets", function () {
    it("should be defined ", function () {
      expect(tickets).toBeDefined();
    });
    it("should be function", function () {
      expect(typeof tickets).toBe("function");
    });
    it("should work only with arrays", function () {
      expect(tickets('xdfcfbxf')).toBe('error');
    });
    it("should work with arrays", function () {
      expect(tickets([25, 25, 50])).toBe('yes');
    });
    it("shouldn't work without arguments", function () {
      expect(tickets()).not.toBe('yes');
    });
})

describe("getSum", function () {
    it("should be defined ", function () {
      expect(getSum).toBeDefined();
    });
    it("should be function", function () {
      expect(typeof getSum).toBe("function");
    });
    it("should be without arguments", function () {
      expect(getSum()).toBe('0');
    });
    it("should be only with one argument", function () {
      expect(getSum('1')).toBe('1');
    });
    it("should be with two string arguments", function(){
      expect(getSum('1','2')).toBe('3');
    })
    it("should be with two string arguments with different length", function(){
      expect(getSum('1','22')).toBe('23');
    })
    it("should be with two string arguments with different length", function(){
      expect(getSum('1','22')).toBe('23');
      expect(getSum('122','22')).toBe('144');
    })
    it("should be with two string arguments, and them elements after addition become more than 10", function(){
      expect(getSum('99','99')).toBe('198');
      expect(getSum('4444','7777')).toBe('12221');
    })
  });

  describe("getQuntityPostsByAuthor", function () {
    it("should be defined ", function () {
      expect(getQuntityPostsByAuthor).toBeDefined();
    });
    it("should be function", function () {
      expect(typeof getQuntityPostsByAuthor).toBe("function");
    });
    it("shouldn't work without arguments", function () {
      expect(getQuntityPostsByAuthor()).not.toBe(`Rimus has 1 posts and 3 comments`);
    });
    it("should work only with object & sting arguments", function () {
      expect(getQuntityPostsByAuthor('efveadf', 1212433534)).toBe(`error`);
    });
    it("shouldn't work if first argument is not object ", function () {
      expect(getQuntityPostsByAuthor('efveadf', 'aefawed')).toBe(`error`);
    });
    it("shouldn't work if second argument is not string ", function () {
      expect(getQuntityPostsByAuthor({dfgs:'fadf'}, 23455)).toBe(`error`);
    });
})

describe("complexFunction", function () {
    it("should be defined ", function () {
      expect(complexFunction).toBeDefined();
    });
    it("should be function", function () {
      expect(typeof complexFunction).toBe("function");
    });
    it("should be without arguments", function () {
      expect(complexFunction()).toBe(NaN);
    });
    it("should be only with one string argument", function () {
      expect(complexFunction("heh")).toBe("hehundefined");
    });
    it("should be only with one number argument", function () {
      expect(complexFunction(1)).toBe(NaN);
    });
    it("should be only with one number argument", function () {
      expect(complexFunction(1)).toBe(NaN);
    });
    it("should be  with one number argument and with second string argument", function () {
      expect(complexFunction(1, "da")).toBe("1da");
    });
    it("should be  with one string argument and with second number argument", function () {
      expect(complexFunction("da", 1)).toBe("da1");
    });
  });
  describe("cache", function () {
    it("should be defined ", function () {
      expect(complexFunction).toBeDefined();
    });
    it("should be function", function () {
      expect(typeof cache).toBe("function");
    });
    it("should be without arguments", function () {
      expect(typeof cache()).toBe("function"); //просто проверили что вернули функцию
    });
    it('if arguments in cache', function () {
      var complexFunction = jest.fn()
      var func = cache(complexFunction)
      func('1', 2)
      func('1', 2)
      func('1', 2)
      func('1', 2)
      expect(complexFunction).toBeCalledTimes(1);
    })
    it('if diffrent arguments', function () {
      var complexFunction = jest.fn()
      var func = cache(complexFunction)
      func('1', 2)
      func('1', 2)
      func('1', 3)
      func('1', 2)
      expect(complexFunction).toBeCalledTimes(2);
    })
  });