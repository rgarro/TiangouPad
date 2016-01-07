describe("pangu",function(){
	
	it("should Have init method",function(){
		expect(pangu).toHaveMethod('init');
	});
	
	it("should Have sets property",function(){
		expect(pangu).toHaveObject('sets');
	});
	
	describe("pangu.sets",function(){
		it("should Have Sky method",function(){
			expect(pangu.sets).toHaveMethod("Sky");
		});
	});
	
	it("should Have opt Object",function(){
		expect(pangu).toHaveObject('opt');
	});
	
	describe("pangu.opt",function(){
		
		beforeAll(function(){
			pangu.init();
		});
		
		it("should Implement canvas:string,sky",function(){
			
		});
	});
	
});