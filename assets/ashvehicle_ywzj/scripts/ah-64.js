const missiles = ["msl1", "msl2", "msl3", "msl4", "msl5", "msl6", "msl7", "msl8"]

function updateBones(context) {
    const previousPropellerRotation = context.getFloat("propellerRotation", 0);
    const propellerRotation = (previousPropellerRotation + context.getPower() / 5) % 360;
    context.setFloat("propellerRotation", propellerRotation)

    const builder = createPoseBuilder();
    builder.setRotation("propeller", 0, propellerRotation, 0);
    builder.setRotation("bone8", propellerRotation, 0, 0);
    builder.setRotation("bone", 0, -context.getPartYRot("auto_cannon"), 0);
    builder.setRotation("bone12", context.getPartXRot("auto_cannon"), 0, 0);
    let remainMissiles = context.getWeaponRemainAmmo("sighting_system", 1)
    for (let i = 0; i < missiles.length; i++) {
        if (i < missiles.length - remainMissiles) {
            builder.hideBone(missiles[i])
        }
    }
    builder.setRotation("ctrl1", context.getPitchInput() * 10, 0, -context.getRollInput() * 10);
    builder.setRotation("ctrl2", context.getPitchInput() * 10, 0, -context.getRollInput() * 10);
    return builder;
}
