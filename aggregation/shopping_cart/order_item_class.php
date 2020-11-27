<?php

class OrderItem
{
    private string $menuitemid;
    private int $qty;

    public function __construct(string $id, int $qty = 1)
    {
        $this->qty = $qty;
        $this->menuitemid = $id;
    }

    public function getQty()
    {
        return $this->qty;
    }

    public function setQty(int $qty)
    {
        $this->qty = $qty;
    }

    public function getMenuItemId()
    {
        return $this->menuitemid;
    }

}
?>