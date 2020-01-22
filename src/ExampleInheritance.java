public class ExampleInheritance {
    public void inh1() {
        System.out.println("base class");
    }
}
    public class ExampleInherit extends ExampleInheritance{
        public void inh2(){
            System.out.println("derived class");

        }
    public static void main(String args[]){
            ExampleInherit ex=new ExampleInherit();
            ex.inh2();
        ex.inh1();
    }

    }

