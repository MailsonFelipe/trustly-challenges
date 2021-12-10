public class Main
{
  public static void main (String[]args)
  {
    ClassMe obj = new ClassMe ();

      obj.setName ("Mailson Felipe");
      obj.setNationality ("Brazilian");
      obj.setBiggestDream ("Work with Computation traveling the world.");

      System.out.println ("Name: " + obj.getName () + "\n");
      System.out.println ("Nationality: " + obj.getNationality () + "\n");
      System.out.println ("Biggest dream: " + obj.getBiggestDream () + "\n");
  }
}
