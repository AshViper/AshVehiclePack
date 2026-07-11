function updateBones(context) {
    const pitchInput = context.getPitchInput()
    const yawInput = context.getYawInput()
    const rollInput = context.getRollInput()

    const builder = createPoseBuilder();
    builder.setRotation("flapLB", -pitchInput * 16, 0, 0);
    builder.setRotation("flapRB", -pitchInput * 16, 0, 0);
    builder.setRotation("flapL", rollInput * 16, 0, 0);
    builder.setRotation("flapR", -rollInput * 16, 0, 0);
    builder.setRotation("flapRV", 0, -yawInput * 16, 0);
    builder.setRotation("Stick", -8 * pitchInput, 0, -8 * rollInput)
    return builder;
}
