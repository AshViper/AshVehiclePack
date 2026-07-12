function updateBones(context) {
    const pitchInput = context.getPitchInput()
    const yawInput = context.getYawInput()
    const rollInput = context.getRollInput()

    const builder = createPoseBuilder();
    builder.setRotation("FLFlap", -pitchInput * 16, 0, 0);
    builder.setRotation("FRFlap", -pitchInput * 16, 0, 0);
    builder.setRotation("LFlap", rollInput * 16, 0, 0);
    builder.setRotation("RFlap", -rollInput * 16, 0, 0);
    builder.setRotation("VBFlap", 0, -yawInput * 16, 0);
    builder.setRotation("ctrl", -8 * pitchInput, 0, -8 * rollInput)
    return builder;
}
