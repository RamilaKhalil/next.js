import Link from 'next/link';

export default function dashboard(){
    return(
        <div>
         <h1>First Post</h1>
      <h2>
        <Link href="/about">Back to home</Link>
        <br></br>
        <Link href="/profile">profile</Link>
        
      </h2>

        </div>
        
    );
}


