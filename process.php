<?php 

    if(isset($_POST['email'])){
        $admin_email = "jvsathyakrishna18bcs@iiitkottayam.ac.in";
        $name = $_POST["name"];
        $email = $_POST["email"];
        $phn  = $_POST["phn"];
        $msg = $_POST["message"];

        mail($admin_email, "New Query",$msg,"\n- Cotact them by ",$phn,"From:".$email);

        header('Location: https://subhamasthu-krishna.herokuapp.com/success.html');


    }

?>