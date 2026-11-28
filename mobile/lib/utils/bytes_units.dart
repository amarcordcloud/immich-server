import 'dart:math';

String formatBytes(int bytes) {
  const units = ['B', 'kB', 'MB', 'GB', 'TB', 'PB', 'EB'];

  int magnitude = 0;
  double remainder = bytes.toDouble();
  while (remainder >= 1000) {
    if (magnitude + 1 < units.length) {
      magnitude++;
      remainder /= 1000;
    } else {
      break;
    }
  }

  return "${remainder.toStringAsFixed(magnitude == 0 ? 0 : 1)} ${units[magnitude]}";
}

String formatHumanReadableBytes(int bytes, int decimals) {
  if (bytes <= 0) {
    return "0 B";
  }
  const suffixes = ["B", "kB", "MB", "GB", "TB"];
  final i = (log(bytes) / log(1000)).floor();
  return '${(bytes / pow(1000, i)).toStringAsFixed(decimals)} ${suffixes[i]}';
}
