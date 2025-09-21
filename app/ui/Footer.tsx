export default function Footer() {
  return (
    <footer className="grid w-full grid-cols-4 gap-5 bg-gray-200 py-16 text-sm">
      <div className="text-center">
        <p className="font-bold text-red-600">MOCOM</p>
        <p className="mb-4 text-red-600">Your Mobile Shop</p>
        <p className="px-20">
          Lorem ipsum dolor sit amet, consectetur adipisicing ept. Quibusdam, minus odit, cdivpa
          divlam consectetur totam, cum aut possimus.
        </p>
      </div>
      <div className="flex justify-center">
        <div>
          <h3 className="mb-4 font-bold">Contact us</h3>
          <ul>
            <li>Email: contact@MOCOM.com</li>
            <li>Phone: (123) 456-7890</li>
            <li>Address: 123 Main St, City, Country</li>
          </ul>
        </div>
      </div>
      <div className="flex justify-center">
        <div>
          <h3 className="mb-4 font-bold">Usefull Links</h3>
          <ul>
            <li>All products</li>
            <li>All products</li>
            <li>All products</li>
          </ul>
        </div>
      </div>
      <div className="flex justify-center">
        <div>
          <h3 className="mb-4 font-bold">Social Media</h3>
          <ul>
            <li>Facebook.com</li>
            <li>Instagram.com</li>
            <li>Youtube</li>
          </ul>
        </div>
      </div>
    </footer>
  );
}
