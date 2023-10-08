function recusriva(max){
    console.log(max);
    if (max >= 1000) return;
    max ++;
    recusriva(max);
}

recusriva(0);