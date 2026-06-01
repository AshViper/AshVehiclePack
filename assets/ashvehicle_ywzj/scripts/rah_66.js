const missiles = ["msl1", "msl2", "msl3", "msl4", "msl5", "msl6"]

function updateBones(context) {
    const previousPropellerRotation = context.getFloat("propellerRotation", 0);
    const propellerRotation = (previousPropellerRotation + context.getPower() / 5) % 360;
    context.setFloat("propellerRotation", propellerRotation)

    const previousGunBarrelRotation = context.getFloat("gunBarrelRotation", 0);
    const deltaTime = (context.currentTimeMillis() - context.lastRenderTime()) / 1000 * 20;
    const deltaRotation = context.getPower() > 0 ? (deltaTime * 32) : 0;
    const gunBarrelRotation = (previousGunBarrelRotation + deltaRotation) % 360;
    context.setFloat("gunBarrelRotation", gunBarrelRotation)

    const builder = createPoseBuilder();
    builder.setRotation("bone4", 0, -propellerRotation, 0);
    builder.setRotation("bone5", propellerRotation, 0, 0);
    builder.setRotation("bone2", 0, -context.getPartYRot("auto_cannon"), 0);
    builder.setRotation("bone8", -context.getPartXRot("auto_cannon"), 0, 0);
    builder.setRotation("bone3", 0, 0, gunBarrelRotation);
    let remainMissiles = context.getWeaponRemainAmmo("sighting_system", 1)
    for (let i = 0; i < missiles.length; i++) {
        if (i < missiles.length - remainMissiles) {
            builder.hideBone(missiles[i])
        }
    }
    return builder;
}
