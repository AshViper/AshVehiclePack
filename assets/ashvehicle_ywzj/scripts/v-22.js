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
    builder.setRotation("bone2", 0, propellerRotation, 0);
    builder.setRotation("bone10", 0, -propellerRotation, 0);
    builder.setRotation("ArtilleryBattery", 0, -context.getPartYRot("auto_cannon"), 0);
    builder.setRotation("GatlingGun", context.getPartXRot("auto_cannon"), 0, 0);
    builder.setRotation("GatlingGun2", 0, gunBarrelRotation, 0);
    return builder;
}
