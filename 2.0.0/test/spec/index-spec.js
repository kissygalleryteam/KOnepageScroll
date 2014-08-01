KISSY.add(function (S, Node,Demo) {
    var $ = Node.all;
    describe('konepagescroll', function () {
        it('Instantiation of components',function(){
            var demo = new Demo();
            expect(S.isObject(demo)).toBe(true);
        })
    });

},{requires:['node','kg/konepagescroll/2.0.0/']});