var AmmoSound : AudioSource;

function OnTriggerEnter (col : Collider) {
	AmmoSound.Play();
	if(GlobalAmmo.LoadedAmmo == 0) {
		GlobalAmmo.LoadedAmmo += 50;
	}else{
	GlobalAmmo.CurrentAmmo += 50;
	}
}