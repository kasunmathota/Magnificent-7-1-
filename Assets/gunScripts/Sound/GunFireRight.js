function Update () {
	if(Input.GetButtonDown("Fire2")){
		var gunSound: AudioSource = GetComponent.<AudioSource>();
		gunSound.Play();
		GetComponent.<Animation>().Play("GunShotRevol");
		GlobalAmmo.CurrentAmmo -= 1;
		}
}