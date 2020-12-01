<?php

abstract class User
{
    private ?string $id;
    private string $username;
    private string $email;
    private string $password;
    private string $type;

    public function __construct(string $username, string $email, string $password)
    {
        $this->username = $username;
        $this->email = $email;
        $this->password = $password;
        $this->id = null;
    }

    public function getType()
    {
        return $this->type;
    }

    public function getId()
    {
        return $this->id;
    }

    public function getUsername()
    {
        return $this->username;
    }

    public function getEmail()
    {
        return $this->email;
    }

    public function getPassword()
    {
        return $this->password;
    }

    public function setUsername(string $newUsername)
    {
        $this->username = $newUsername;
    }

    public function setEmail(string $newEmail)
    {
        $this->email = $newEmail;
    }

    public function setPassword(string $newPassword)
    {
        $this->password = $newPassword;
    }
}

class Admin extends User
{
    public function __construct(string $username, string $email, string $password)
    {
        parent::__construct($username, $email, $password);
        $this->type = "Admin";
    }
}

class RealName
{
    private string $firstname;
    private string $lastname;

    /**
     * Instantiates the RealName class with a User's first name and last name.
     * @param {string} firstName
     * @param {string} lastName
     */
    public function __construct(string $firstName, string $lastName)
    {
        $this->firstName = $firstName;
        $this->lastName = $lastName;
    }

    public function getFirstName()
    {
        return $this->firstName;
    }

    public function getLastName()
    {
        return $this->lastName;
    }

    public function getFullName()
    {
        return $this->firstname . " " . $this->lastname;
    }

    public function setFirstName(string $newFname)
    {
        $this->firstname = $newFname;
    }

    public function setLastName(string $newLname)
    {
        $this->lastname = $newLname;
    }
}

class Address
{

    private array $addressLines;

    public function __construct(string $addressLines)
    {
        $this->addressLines[] = $this->parseAddressLines($addressLines);
    }

    /**
     * Retrieves the address
     */
    public function getAddress()
    {
        return $this->addressLines;
    }

    public function setAddress(string $newAddress)
    {
        $this->addressLines = $this->parseAddressLines($newAddress);
    }

    private function parseAddressLines(string $lines)
    {
        $linesarr = explode("", $lines);
        foreach ($linesarr as &$line) {
            $line = trim($line);
        }
        return $linesarr;
    }
}

class Card
{

    private string $nameOnCard;
    private int $cardNumber;
    private int $cvv;
    private string $expiryDate;

    public function __construct($name, $cardnum, $cvv, $expirydate)
    {
        $this->cardNumber = $cardnum;
        $this->cvv = $cvv;
        $this->expiryDate = $expirydate;
        $this->nameOnCard = $name;
    }

    public function getNameOnCard()
    {
        return $this->nameOnCard;
    }

    public function getCardNumber()
    {
        return $this->cardNumber;
    }

    public function getCVV()
    {
        return $this->cvv;
    }

    public function getExpiryDate()
    {
        return $this->expiryDate;
    }

    public function setNameOnCard(string $name)
    {
        $this->nameOnCard = $name;
    }

    public function setCardNumber(int $cardnum)
    {
        $this->cardNumber = $cardnum;
    }

    public function setCVV(int $cvv)
    {
        $this->cvv = $cvv;
    }

    public function setExpiryDate(string $date)
    {
        $this->expiryDate = $date;
    }
}

class Customer extends User
{

    private Card $card;
    private RealName $name;
    private Address $deliveryAddress;

    public function __construct($username, $email, $password, $card, $realname, $address)
    {
        parent::__construct($username, $email, $password);
        $this->card = $card;
        $this->deliveryAddress = $address;
        $this->name = $realname;
        $this->type = "Customer";
    }

    public function getCard()
    {
        return $this->card;
    }

    public function getDeliveryAddress()
    {
        return $this->deliveryAddress;
    }

    public function getRealName()
    {
        return $this->name;
    }
}
