function updateBones(context) {
    const pitchInput = context.getPitchInput()
    const yawInput = context.getYawInput()
    const rollInput = context.getRollInput()

    const builder = createPoseBuilder();
    builder.setRotation("BLFlap", pitchInput * 20, 0, 0);
    builder.setRotation("BRFlap", pitchInput * 20, 0, 0);
    builder.setRotation("LFlap", 0, 0, -rollInput * 20);
    builder.setRotation("RFlap", 0, 0, -rollInput * 20);
    builder.setRotation("VBLFlap", 0, -yawInput * 20, 0);
    builder.setRotation("VBRFlap", 0, -yawInput * 20, 0);
    builder.setRotation("ctrl", -8 * pitchInput, 0, -8 * rollInput);
    return builder;
}
