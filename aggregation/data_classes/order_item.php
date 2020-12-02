<?php

class OrderItem
{
    private string $item;
    private int $qty;

    public function __construct(string $id, int $qty = 1)
    {
        $this->qty = $qty;
        $this->item = $id;
    }

    public function getQty()
    {
        return $this->qty;
    }

    public function setQty(int $qty)
    {
        $this->qty = $qty;
    }

    public function getMenuItem()
    {
        return $this->item;
    }

}
?>