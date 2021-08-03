<?php
    //get mails from database
    function getMails(&$arrMails){
        global $db;
        $sql = "SELECT * FROM first";
        $result = $db->query($sql);
        if($result->num_rows>0){
            //output data of each row
            while($row = $result->fetch_assoc()){
                // echo "E-mail : ". $row["email"]. "<br>";
                array_push($arrMails, $row["email"]);
            }
        }else{
            //echo "0 Results";
        }
    }

    //cek if mail is contain in array then return false
    //if not then return false
    function checkValidMail($arrMails, $mail)
    {
        for($i = 0; $i < count($arrMails); $i++){
            if($arrMails[$i]==$mail){
                return false;
            }
        }
        return true;
    }
?>