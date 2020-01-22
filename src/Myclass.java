public class Myclass {
int num;
Myclass(){
    num=100;
}
}
public class ConsDemo{
    public static void main(String args[]){
        Myclass t1=new Myclass();
        Myclass t2=new Myclass();
        System.out.println(t1.num+""+t2.num);
    }
}