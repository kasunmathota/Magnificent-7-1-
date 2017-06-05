 var DamageAmount : int = 5;	
var TargetDistance : float;
var AllowedRange : float = 15;

function Update () {
	if(Input.GetButtonDown("Fire2")) {

		var Shot : RaycastHit;
			if(Physics.Raycast (transform.position, transform.transformDirection(Vector3.forward, Shot))) { 
				TargetDistance = Shot.distance;
					if(TargetDistance < AllowedRange) {
						Shot.transform.SendMessage("DeductPoints", DamageAmount, SendMessageOptions.DontRequireReceiver);
						}
					}
				}
			}