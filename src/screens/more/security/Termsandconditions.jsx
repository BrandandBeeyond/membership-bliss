import React from 'react';
import { SafeAreaView } from 'react-native-safe-area-context';
import { globalStyle } from '../../../../assets/styles/globalStyle';
import { Image, ScrollView, View } from 'react-native';
import { verticalScale } from '../../../../assets/styles/Scaling';
import Typography from '../../../components/Typography';

const Termsandconditions = () => {
  return (
    <SafeAreaView
      style={[globalStyle.bgwhite, globalStyle.flex, globalStyle.relative]}
    >
      <ScrollView
        showsVerticalScrollIndicator={false}
        contentContainerStyle={globalStyle.px20}
      >
        <Typography variant="fthead" color="#313131ff" weight="SemiBold">
          Nature’s Club Membership is designed to ensure a smooth, joyful and
          harmonious experience for all members.
        </Typography>

        <View style={{ marginTop: verticalScale(12) }} />

        <Typography
          variant="subline"
          weight="MMedium"
          style={{ marginBottom: verticalScale(8) }}
        >
          1. We warmly welcome you as a valued member. Enjoy all membership
          benefits for one full year from the date of purchase.
        </Typography>

        <Typography
          variant="subline"
          weight="MMedium"
          style={{ marginBottom: verticalScale(8) }}
        >
          2. To make the most of your Room and Restaurant offers, please book in
          advance so we can serve you better.
        </Typography>

        <Typography
          variant="subline"
          weight="MMedium"
          style={{ marginBottom: verticalScale(8) }}
        >
          3. Kindly inform our team about your coupon before placing your order
          to ensure smooth service.
        </Typography>

        <Typography
          variant="subline"
          weight="MMedium"
          style={{ marginBottom: verticalScale(8) }}
        >
          4. All discounts are based on regular menu prices and are subject to
          availability.
        </Typography>

        <Typography
          variant="subline"
          weight="MMedium"
          style={{ marginBottom: verticalScale(8) }}
        >
          5. Offers are not combinable with other ongoing promotions or
          discounts.
        </Typography>

        <Typography
          variant="subline"
          weight="MMedium"
          style={{ marginBottom: verticalScale(8) }}
        >
          6. Menu items and prices may change without prior notice. We
          appreciate your understanding.
        </Typography>

        <Typography
          variant="subline"
          weight="MMedium"
          style={{ marginBottom: verticalScale(8) }}
        >
          7. Please present your valid membership card or proof of membership at
          check-in to avail your benefits.
        </Typography>

        <Typography
          variant="subline"
          weight="MMedium"
          style={{ marginBottom: verticalScale(8) }}
        >
          8. For an extra guest in your room, additional charges will apply.
        </Typography>

        <Typography
          variant="subline"
          weight="MMedium"
          style={{ marginBottom: verticalScale(8) }}
        >
          9. Complimentary food offers are exclusive and cannot be combined with
          other coupons.
        </Typography>

        <Typography
          variant="subline"
          weight="MMedium"
          style={{ marginBottom: verticalScale(8) }}
        >
          10. In case of any dispute or misunderstanding, the decision of the
          outlet manager will be final and binding.
        </Typography>

        <Typography
          variant="subline"
          weight="MMedium"
          style={{ marginBottom: verticalScale(8) }}
        >
          11. All offers are valid for dine-in only and not applicable for room
          service, takeaway, or home delivery. We do not pack leftover food.
        </Typography>

        <Typography
          variant="subline"
          weight="MMedium"
          style={{ marginBottom: verticalScale(8) }}
        >
          12. Each visit, billing, or transaction can avail benefits from only
          one membership booklet or card.
        </Typography>

        <Typography
          variant="subline"
          weight="MMedium"
          style={{ marginBottom: verticalScale(8) }}
        >
          13. You may use one offer per visit — either a Percentage Offer
          Coupon, Cash Voucher, or Privilege Card.
        </Typography>

        <Typography
          variant="subline"
          weight="MMedium"
          style={{ marginBottom: verticalScale(8) }}
        >
          14. Offers are not valid on long weekends and select blackout dates
          such as:
        </Typography>

        <Typography
          variant="subline"
          weight="MMedium"
          style={{ marginBottom: verticalScale(8) }}
        >
          15. Jan 1, Jan 26, Feb 14, Holi, Aug 15, Oct 2, Diwali, Dec 25, Dec
          31, and during resort wedding programs.
        </Typography>

        <Typography
          variant="subline"
          weight="MMedium"
          style={{ marginBottom: verticalScale(8) }}
        >
          16. We reserve the right to cancel memberships or refuse entry in
          cases of indiscipline to ensure public safety and preserve our
          resort's reputation.
        </Typography>

        <Typography
          variant="subline"
          weight="MMedium"
          style={{ marginBottom: verticalScale(8) }}
        >
          17. Taxes and government levies are extra, as applicable by law.
        </Typography>

        <Typography
          variant="subline"
          weight="MMedium"
          style={{ marginBottom: verticalScale(8) }}
        >
          18. Membership cards are non-refundable and non-replaceable in case of
          loss.
        </Typography>

        <Typography
          variant="subline"
          weight="MMedium"
          style={{ marginBottom: verticalScale(8) }}
        >
          19. For clarity and record, please ensure all communications and
          commitments are in writing.
        </Typography>

        <Typography
          variant="subline"
          weight="MMedium"
          style={{ marginBottom: verticalScale(8) }}
        >
          20. Vouchers are not redeemable for cash.
        </Typography>

        <Typography
          variant="subline"
          weight="MMedium"
          style={{ marginBottom: verticalScale(8) }}
        >
          21. We are proud to serve pure vegetarian cuisine across all our
          dining outlets.
        </Typography>

        <Typography
          variant="subline"
          weight="MMedium"
          style={{ marginBottom: verticalScale(8) }}
        >
          22. Value coupons and discount coupons cannot be clubbed together.
        </Typography>

        <Typography
          variant="subline"
          weight="MMedium"
          style={{ marginBottom: verticalScale(8) }}
        >
          23. You may gift your vouchers to friends or family members — they can
          redeem them and enjoy our warm hospitality.
        </Typography>
      </ScrollView>
    </SafeAreaView>
  );
};

export default Termsandconditions;
