<?php 

class Order{
    private string $id;
    private ?Customer $customer;
    private array $items;

    public function __construct(array $items, ?Customer $customer){
        $this->items[] = $items;
        $this->customer = $customer;
        $this->id = null;
    }

    public function getOrderItems(){
        return $this->items;
    }

    public function getCustomer(){
        return $this->customer;
    }

    public function getOrderId(){
        return $this->id;
    }

    public function addOrderItem(OrderItem $orderitem){
        array_push($this->items, $orderitem);
    }
}

?>