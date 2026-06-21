const aim9 = ["aim9_1", "aim9_2", "aim9_3", "aim9_4", "aim9_5", "aim9_6"]

function updateBones(context) {
    const pitchInput = context.getPitchInput()
    const yawInput = context.getYawInput()
    const rollInput = context.getRollInput()

    const builder = createPoseBuilder();
    builder.setRotation("LPlane", pitchInput * 12, 0, 0);
    builder.setRotation("RPlane", pitchInput * 12, 0, 0);
    builder.setRotation("LFlap", rollInput * 16, 0, 0);
    builder.setRotation("RFlap", -rollInput * 16, 0, 0);
    builder.setRotation("VPlane", 0, -yawInput * 8, 0);
    builder.setRotation("ctrl", -8 * pitchInput, 0, -8 * rollInput);
    builder.setRotation("ctrl2", -8 * pitchInput, 0, -8 * rollInput);

    for (let i = 0; i < aim9.length; i++) {
        if (i < aim9.length - context.getWeaponRemainAmmo("sighting_system", 1)) {
            builder.hideBone(aim9[i])
        }
    }
    return builder;
}
