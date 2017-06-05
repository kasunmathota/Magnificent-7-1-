function Update () {
	if(GlobalAmmo.LoadedAmmo >= 1) {	
		if(Input.GetButtonDown("Fire1")){
			var gunSound: AudioSource = GetComponent.<AudioSource>();
			gunSound.Play();
			GetComponent.<Animation>().Play("GunShotRevol");
			GlobalAmmo.LoadedAmmo -= 1;

			}
		}
	}