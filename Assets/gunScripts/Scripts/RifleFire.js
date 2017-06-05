function Update () {
	if(Input.GetButtonDown("Fire1")){
		var gunSound: AudioSource = GetComponent.<AudioSource>();
		gunSound.Play();
		GetComponent.<Animation>().Play("GunShotRifle");
		GlobalAmmo.CurrentAmmo -= 1;

		}
}